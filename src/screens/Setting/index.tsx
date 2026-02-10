import { StyleSheet, View } from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';
import SettingCard from '../../components/SettingCard';
import VibrateIcon from '../../assets/icons/vibrate.svg';
import BeepIcon from '../../assets/icons/beep.svg';
import { useSettingsStore } from '../../store/settingsStore';

const SettingScreen = () => {
  const { vibrationEnabled, toggleVibration, beepEnabled, toggleBeep } =
    useSettingsStore();

  return (
    <Layout>
      <Header backIcon title="Settings" />
      <View style={styles.container}>
        <SettingCard
          Icon={VibrateIcon}
          isSwitch={true}
          title="Vibration"
          description="Vibration when scan is done."
          value={vibrationEnabled}
          onChangeValue={toggleVibration}
        />
        <SettingCard
          Icon={BeepIcon}
          isSwitch={true}
          title="Beep"
          description="Beep when scan is done."
          value={beepEnabled}
          onChangeValue={toggleBeep}
        />
      </View>
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
