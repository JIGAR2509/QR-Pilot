import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    paddingVertical: spacing.sm,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    height: 2,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  texts: { flexShrink: 1, color: colors.white },
  textContainer: { flex: 1, gap: spacing.xs, marginLeft: spacing.md },
  title: {
    fontSize: fontSize.lg,
    fontFamily: fonts.bold,
  },
  description: {
    fontSize: fontSize.sm,
    fontFamily: fonts.normal,
  },
  extraText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: fontSize.md,
  },
});

export default styles;
