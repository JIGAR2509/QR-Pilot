import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary },
  qrLogo: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 4,
  },
  sheetHandle: {
    backgroundColor: colors.primary,
    width: '35%',
    marginTop: spacing.sm,
    height: 5,
  },
  sheetContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 40,
    shadowColor: colors.black,
    shadowOpacity: 0.85,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  sheetView: {
    paddingVertical: spacing.xxl + 4,
    paddingBottom: spacing.xxl + 10,
  },
  sheetContent: { paddingHorizontal: spacing.giant, gap: spacing.xs },
  title: {
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.display + 6,
  },
  description: {
    lineHeight: 24,
    fontSize: fontSize.base,
    fontFamily: fonts.medium,
    color: colors.white,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: 8,
    marginVertical: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
  },
  buttonText: {
    fontFamily: fonts.boldItalic,
    fontSize: fontSize.md,
  },
  buttonIcon: { position: 'absolute', right: 15 },
});

export default styles;
