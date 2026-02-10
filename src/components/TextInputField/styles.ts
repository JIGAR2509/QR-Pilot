import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/typography';
import { fonts } from '../../theme/fonts';

const styles = StyleSheet.create({
  container: { gap: spacing.xs },
  label: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 8,
    color: colors.white,
    backgroundColor: colors.gray,
    padding: spacing.md,
    fontFamily: fonts.bold,
  },
});

export default styles;
