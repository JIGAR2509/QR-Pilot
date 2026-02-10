import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/typography';
import { fonts } from '../../theme/fonts';

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
});

export default styles;
