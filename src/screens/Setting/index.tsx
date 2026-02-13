import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';
import SettingCard from '../../components/SettingCard';
import VibrateIcon from '../../assets/icons/vibrate.svg';
import NotificationIcon from '../../assets/icons/beep.svg';
import LanguageIcon from '../../assets/icons/language.svg';
import RightArrowIcon from '../../assets/icons/right_arrow.svg';
import BeepIcon from '../../assets/icons/alerts.svg';
import { useSettingsStore } from '../../store/settingsStore';
import LanguageSheet from '../../components/LanguageSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ConfirmationSheet from '../../components/ConfirmationSheet';
import RNRestart from 'react-native-restart';
import i18n from '../../translation';

const SettingScreen = () => {
  const { t } = useTranslation();
  const {
    vibrationEnabled,
    toggleVibration,
    beepEnabled,
    toggleBeep,
    language,
    setLanguage,
    notificationsEnabled,
    toggleNotifications,
  } = useSettingsStore();

  const languageSheetRef = useRef<BottomSheetModal>(null);
  const restartSheetRef = useRef<BottomSheetModal>(null);
  const [pendingLanguage, setPendingLanguage] = useState<string>('');

  const getLanguageLabel = (code: string) => {
    switch (code) {
      case 'en':
        return 'English';
      case 'hn':
        return 'Hindi (हिंदी)';
      case 'gj':
        return 'Gujarati (ગુજરાતી)';
      default:
        return 'English';
    }
  };

  const handleLanguagePress = () => {
    languageSheetRef.current?.present();
  };

  const onSelectLanguage = (lang: string) => {
    setPendingLanguage(lang);
    languageSheetRef.current?.dismiss();
    setTimeout(() => {
      restartSheetRef.current?.present();
    }, 500);
  };

  const handleRestart = () => {
    setLanguage(pendingLanguage);
    i18n.changeLanguage(pendingLanguage);
    restartSheetRef.current?.dismiss();
    setTimeout(() => {
      RNRestart.restart();
    }, 500);
  };

  return (
    <Layout>
      <Header backIcon title={t('settings.title')} />
      <View style={styles.container}>
        <SettingCard
          Icon={NotificationIcon}
          title={'Push Notifications'}
          description={'Enable or disable notifications'}
          isSwitch
          value={notificationsEnabled}
          onChangeValue={toggleNotifications}
        />
        <SettingCard
          Icon={LanguageIcon}
          IconHeight={25}
          IconWidth={25}
          title={t('settings.language')}
          description={t('settings.select_language')}
          text={getLanguageLabel(language)}
          rightIcon={RightArrowIcon}
          onPress={handleLanguagePress}
        />
        <SettingCard
          Icon={VibrateIcon}
          isSwitch={true}
          title={t('settings.vibration')}
          description={t('settings.vibration_desc')}
          value={vibrationEnabled}
          onChangeValue={toggleVibration}
        />
        <SettingCard
          Icon={BeepIcon}
          IconHeight={25}
          IconWidth={25}
          isSwitch={true}
          title={t('settings.beep')}
          description={t('settings.beep_desc')}
          value={beepEnabled}
          onChangeValue={toggleBeep}
        />
      </View>
      <LanguageSheet
        ref={languageSheetRef}
        selectedLanguage={language}
        onSelect={onSelectLanguage}
        title={t('settings.language')}
      />
      <ConfirmationSheet
        ref={restartSheetRef}
        title={t('settings.restart_app')}
        description={t('settings.restart_desc')}
        confirmText={t('settings.restart_now')}
        cancelText={t('common.cancel')}
        onConfirm={handleRestart}
      />
    </Layout>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    color: colors.primary,
    fontSize: fontSize.xxl,
    fontFamily: fonts.bold,
  },
  container: {
    marginTop: spacing.giant,
    gap: spacing.xl,
  },
});
