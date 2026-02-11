import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';
import { isAndroid } from '../../commonUtils';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: colors.gray,
    width: 60,
  },
  contentContainer: {
    padding: spacing.xl,
    gap: spacing.lg,
    paddingBottom: isAndroid ? spacing.massive + 10 : spacing.giant,
  },
  title: {
    fontSize: fontSize.xxl,
    fontFamily: fonts.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  optionSelected: {
    backgroundColor: colors.gray,
  },
  optionText: {
    fontSize: fontSize.lg,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  optionTextSelected: {
    color: colors.white,
    fontFamily: fonts.bold,
  },
});

export default styles;
