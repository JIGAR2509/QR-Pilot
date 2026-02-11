import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';
import { isAndroid } from '../../commonUtils';

const styles = StyleSheet.create({
  background: {
    borderRadius: 25,
  },
  indicator: {
    backgroundColor: colors.secondary,
    width: '30%',
  },
  contentContainer: {
    flex: 1,
    padding: spacing.xl,
    alignItems: 'center',
    paddingBottom: isAndroid ? spacing.xxl + 10 : spacing.xl,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSize.title,
    color: colors.gray,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: fontSize.lg,
    color: colors.gray,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    paddingBottom: spacing.xl,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: colors.gray,
  },
  confirmButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: fontSize.md,
    color: colors.white,
  },
});

export default styles;
