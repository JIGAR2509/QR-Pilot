import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    padding: spacing.xxs + 1,
    marginTop: spacing.xxxl,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
    zIndex: 1,
  },
  tabText: {
    color: colors.white,
    fontSize: fontSize.base,
    fontFamily: fonts.bold,
  },
  slider: {
    position: 'absolute',
    top: spacing.xxs + 1,
    bottom: spacing.xxs + 1,
    left: spacing.xxs + 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default styles;
