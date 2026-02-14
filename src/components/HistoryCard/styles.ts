import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontSize, spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  gradientBorder: {
    paddingLeft: 3.5,
    borderRadius: 8,
    marginVertical: spacing.xxs + 2,
  },
  textContainer: {
    flex: 1,
    width: '80%',
    gap: spacing.xs,
    marginHorizontal: spacing.xs,
  },
  text: {
    flexShrink: 1,
    color: colors.white,
  },
  time: {
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
  timeText: {
    color: colors.primary,
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: fontSize.sm,
  },
  wrapper: {
    width: '100%',
  },
  deleteContainer: {
    zIndex: 2,
    position: 'absolute',
    right: 20,
    top: '35%',
  },
  expandableSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrContainer: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 8,
    marginBottom: spacing.sm,
  },
});

export default styles;
