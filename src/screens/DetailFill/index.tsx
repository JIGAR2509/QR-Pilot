/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { useTranslation } from 'react-i18next';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import styles from './styles';
import { colors } from '../../theme/colors';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import ShareIcon from '../../assets/icons/Share.svg';
import SaveIcon from '../../assets/icons/Save.svg';
import Share from 'react-native-share';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import {
  renderIcon,
  renderInputVariants,
  DetailFillFormData,
  getQRData,
} from './variants';
import QRCode from 'react-native-qrcode-svg';
import Gradient from '../../components/Gradient';
import { inputData, isGenerateDisabled } from './utils';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import { useHistoryStore } from '../../store/historyStore';

const pageTitleMap = {
  Text: 'generate.options.text',
  Website: 'generate.options.website',
  'Wi-Fi': 'generate.options.wifi',
  Contact: 'generate.options.contact',
  WhatsApp: 'generate.options.whatsapp',
  Email: 'generate.options.email',
  Twitter: 'generate.options.twitter',
  Instagram: 'generate.options.instagram',
  Location: 'generate.options.location',
} as const;

const DetailFillScreen = () => {
  const [isFront, setIsFront] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<DetailFillFormData>(inputData);
  const { t } = useTranslation();

  const qrRef = useRef<QRCode | null>(null);
  const route = useRoute<RouteProp<RootStackParamList, 'DetailFillScreen'>>();
  const details = route.params;
  const transition = useSharedValue(1);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: transition.value,
      transform: [{ scale: transition.value }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - transition.value,
      transform: [{ scale: 1 - transition.value }],
    };
  });

  const handleSave = async () => {
    try {
      if (!qrRef.current) return;
      const uri = await captureRef(qrRef, {
        format: 'png',
        quality: 1,
      });
      await CameraRoll.saveAsset(uri, { type: 'photo' });
      Toast.show({
        type: 'success',
        text1: t('detail.saved'),
        text2: t('detail.check_gallery'),
      });
    } catch (err) {
      console.error('Save error:', err);
    }
  };

  const handleShare = async () => {
    try {
      if (!qrRef.current) return;
      const uri = await captureRef(qrRef, {
        format: 'png',
        quality: 1,
      });
      await Share.open({
        url: Platform.OS === 'android' ? 'file://' + uri : uri,
        type: 'image/png',
      });
    } catch {}
  };

  const handleButtonPress = () => {
    if (isFront) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        transition.value = withTiming(0, {
          duration: 350,
          easing: Easing.inOut(Easing.ease),
        });
        setIsFront(false);
        Toast.show({
          type: 'info',
          text1: t('detail.generated_success'),
        });
        const qrValue = getQRData(details.title, formData);
        useHistoryStore.getState().addToHistory({
          id: Date.now().toString(),
          value: qrValue,
          type: 'create',
          category: details.title,
          createdAt: new Date().toISOString(),
        });
      }, 2000);
    } else {
      transition.value = withTiming(1, {
        duration: 350,
        easing: Easing.inOut(Easing.ease),
      });
      setIsFront(true);
    }
  };

  if (!details?.title) {
    return null;
  }

  // Normalize hyphen in title to ensure mapping works (U+2011 to U+002D)
  const normalizedTitle = details.title.replace(/\u2011/g, '-');

  const getTitleKey = () => {
    const key = normalizedTitle as keyof typeof pageTitleMap;
    // Try original title or normalized title
    return (
      pageTitleMap[details.title as keyof typeof pageTitleMap] ||
      pageTitleMap[key] ||
      'detail.title'
    );
  };

  return (
    <Layout>
      <Header title={t(getTitleKey())} backIcon />
      <View style={styles.gradientWrapper}>
        {isFront ? (
          <Animated.View style={frontAnimatedStyle}>
            <View style={styles.container}>
              <Gradient
                colors={[colors.primary, colors.white, colors.primary]}
                angle={90}
                style={[styles.gradient, { top: 0 }]}
              />
              <Gradient
                colors={[colors.primary, colors.white, colors.primary]}
                angle={90}
                style={[styles.gradient, { bottom: 0 }]}
              />
              <View style={styles.iconWrapper}>
                {renderIcon(details.title)}
              </View>
              <View style={styles.inputWrapper}>
                {renderInputVariants(details.title, formData, setFormData, t)}
              </View>

              <LinearGradient
                colors={
                  isGenerateDisabled(details.title, formData)
                    ? [colors.white, colors.secondary]
                    : [colors.primary, colors.white, colors.primary]
                }
                useAngle
                angle={150}
                style={{ alignSelf: 'center', borderRadius: 8, marginTop: 20 }}
              >
                <TouchableOpacity
                  onPress={handleButtonPress}
                  disabled={
                    loading || isGenerateDisabled(details.title, formData)
                  }
                  style={styles.button}
                >
                  {loading && isFront ? (
                    <ActivityIndicator color={colors.secondary} />
                  ) : (
                    <Text
                      style={[
                        styles.buttonText,
                        {
                          color: isGenerateDisabled(details.title, formData)
                            ? colors.white
                            : colors.secondary,
                        },
                      ]}
                    >
                      {t('detail.generate')}
                    </Text>
                  )}
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Animated.View>
        ) : (
          <View style={styles.qrWrapper}>
            <Animated.View style={backAnimatedStyle}>
              <View style={styles.qrBorder}>
                <QRCode
                  value={getQRData(details.title, formData) || 'NA'}
                  size={250}
                  getRef={ref => {
                    qrRef.current = ref;
                  }}
                />
              </View>
            </Animated.View>
            <View style={styles.qrButtonRow}>
              <TouchableOpacity onPress={handleSave} style={styles.qrButton}>
                <SaveIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare} style={styles.qrButton}>
                <ShareIcon />
              </TouchableOpacity>
            </View>
            <Gradient
              colors={
                isGenerateDisabled(details.title, formData)
                  ? [colors.white, colors.gray]
                  : [colors.primary, colors.white, colors.primary]
              }
              angle={150}
              style={styles.editButton}
            >
              <TouchableOpacity
                onPress={handleButtonPress}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: colors.secondary,
                    },
                  ]}
                >
                  {t('detail.edit')}
                </Text>
              </TouchableOpacity>
            </Gradient>
          </View>
        )}
      </View>
    </Layout>
  );
};

export default DetailFillScreen;
