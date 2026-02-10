import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseToast, ErrorToast, ToastProps } from 'react-native-toast-message';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

export const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={[styles.base, styles.success]}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={[styles.base, styles.error]}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  info: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={[styles.base, styles.info]}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

const styles = StyleSheet.create({
  base: {
    borderLeftWidth: 6,
    borderRadius: 8,
    minHeight: 60,
    paddingVertical: 8,
  },
  success: {
    borderLeftColor: colors.success,
    backgroundColor: '#f0fff4',
  },
  error: {
    borderLeftColor: colors.error,
    backgroundColor: '#fff0f0',
  },
  info: {
    borderLeftColor: colors.primary,
    backgroundColor: '#f0f4ff',
  },
  text1: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.secondary,
  },
  text2: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.secondary,
  },
});

export default toastConfig;
