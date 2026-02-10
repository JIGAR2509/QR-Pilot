import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Linking,
  AppState,
  TouchableOpacity,
  LayoutRectangle,
  Alert,
  Text,
  Vibration,
} from 'react-native';
import {
  Camera,
  CameraProps,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useSettingsStore } from '../../store/settingsStore';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  createAnimatedComponent,
  interpolate,
  Extrapolation,
  useAnimatedProps,
  FadeInUp,
} from 'react-native-reanimated';
import FlashOFFlogo from '../../assets/icons/flashlight.svg';
import FlashONlogo from '../../assets/icons/flash-on.svg';
import GalleryLogo from '../../assets/icons/gallery.svg';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import RNQRGenerator from 'rn-qr-generator';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const ReanimatedCamera = createAnimatedComponent(Camera);

const QRScreen = () => {
  const [permission, setPermission] = useState(false);
  const [scanLayout, setScanLayout] = useState<null | LayoutRectangle | string>(
    null,
  );
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [isTorchOn, setisTorchOn] = useState(false);
  const device = useCameraDevice('back');
  const zoom = useSharedValue(device?.neutralZoom);
  const inset = useSafeAreaInsets();
  const translateY = useSharedValue(0);
  const zoomOffset = useSharedValue(0);
  const gesture = Gesture.Pinch()
    .onBegin(() => {
      zoomOffset.value = zoom.value ?? 1;
    })
    .onUpdate(event => {
      const z = zoomOffset.value * event.scale;
      zoom.value = interpolate(
        z,
        [1, 10],
        [device?.minZoom ?? 0, device?.maxZoom ?? 10],
        Extrapolation.CLAMP,
      );
    });
  const animatedProps = useAnimatedProps<CameraProps>(
    () => ({ zoom: zoom.value }),
    [zoom],
  );

  useEffect(() => {
    const sub = AppState.addEventListener('change', state => {
      if (state === 'active') {
        setIsCameraActive(true);
      } else {
        setIsCameraActive(false);
      }
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    const getPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setPermission(status === 'granted');
    };
    getPermission();
  }, []);

  const { vibrationEnabled, beepEnabled } = useSettingsStore();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (!scanLayout) return;
      codes.forEach(code => {
        if (code.value) {
          if (vibrationEnabled) {
            Vibration.vibrate();
          }
          if (beepEnabled) {
            playBeep();
          }
          Linking.openURL(code.value).catch(err =>
            Alert.alert('Failed to open URL:', err),
          );
        }
      });
    },
  });

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(240, { duration: 2000 }),
      -1,
      true,
    );
  });

  const scanLineStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!device) return null;

  const playBeep = () => {
    const beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error: any) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      beep.play((success: boolean) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
        beep.release();
      });
    });
  };

  const imagePicker = () => {
    ImagePicker.openPicker({
      cropping: false,
    }).then(async image => {
      try {
        const response = await RNQRGenerator.detect({
          uri: image.path,
        });

        const { values } = response;

        if (values && values.length > 0) {
          const value = values[0];
          if (value) {
            if (vibrationEnabled) {
              Vibration.vibrate();
            }
            if (beepEnabled) {
              playBeep();
            }
            Linking.openURL(value).catch(err =>
              Alert.alert('Failed to open URL:', err),
            );
          }
        } else {
          Alert.alert('No QR Code found', 'Please try another image');
        }
      } catch (error) {
        console.log('QR detection failed', error);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeInUp.duration(1200)}
        style={[styles.upperTab, { marginTop: inset.top }]}
      >
        <TouchableOpacity onPress={imagePicker} style={styles.logoContainer}>
          <GalleryLogo height={20} width={20} />
          <Text style={[styles.logoText, { color: colors.white }]}>
            Gallery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setisTorchOn(prev => !prev);
          }}
          style={styles.logoContainer}
        >
          {isTorchOn ? (
            <FlashONlogo height={20} width={20} />
          ) : (
            <FlashOFFlogo height={20} width={20} />
          )}
          <Text
            style={[
              styles.logoText,
              { color: isTorchOn ? colors.primary : colors.white },
            ]}
          >
            Flashlight
          </Text>
        </TouchableOpacity>
      </Animated.View>
      {permission && (
        <GestureDetector gesture={gesture}>
          <ReanimatedCamera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isCameraActive}
            codeScanner={codeScanner}
            torch={isTorchOn ? 'on' : 'off'}
            animatedProps={animatedProps}
          />
        </GestureDetector>
      )}
      <View pointerEvents="none" style={styles.overlay}>
        <View style={styles.topMask} />
        <View style={styles.middleRow}>
          <View style={styles.sideMask} />
          <View
            style={styles.scanArea}
            onLayout={e => setScanLayout(e.nativeEvent.layout)}
          >
            <Animated.View style={[styles.scanLine, scanLineStyle]} />
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>
          <View style={styles.sideMask} />
        </View>
        <View style={styles.bottomMask} />
      </View>
    </SafeAreaView>
  );
};

export default QRScreen;
