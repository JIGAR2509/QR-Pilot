import { Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import QRIcon from '../../assets/icons/QR.svg';
import ArrowIcon from '../../assets/icons/right_arrow.svg';
import Animated, { FadeIn } from 'react-native-reanimated';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

import { useTranslation } from 'react-i18next';

const OnboardingScreen = () => {
  const { t } = useTranslation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(1000)} style={styles.qrLogo}>
        <QRIcon width={200} height={200} />
      </Animated.View>
      <BottomSheet
        ref={bottomSheetRef}
        handleIndicatorStyle={styles.sheetHandle}
        backgroundStyle={styles.sheetContainer}
      >
        <BottomSheetView style={styles.sheetView}>
          <View style={styles.sheetContent}>
            <Text style={styles.title}>{t('onboarding.title')}</Text>
            <Text style={styles.description}>
              {t('onboarding.description')}
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>
                navigation.navigate('MainTab', { screen: 'QRScreen' })
              }
            >
              <Text style={styles.buttonText}>{t('onboarding.button')}</Text>
              <ArrowIcon height={20} width={20} style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default OnboardingScreen;
