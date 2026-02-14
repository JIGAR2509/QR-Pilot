import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1,
    paddingTop: spacing.xs,
    justifyContent: 'center',
  },
  container: {
    overflow: 'hidden',
    backgroundColor: colors.secondary,
    paddingVertical: spacing.xxxl,
    borderRadius: 6,
  },
  iconWrapper: {
    alignSelf: 'center',
    paddingVertical: spacing.xl,
  },
  inputWrapper: {
    gap: spacing.lg,
    paddingHorizontal: spacing.xxl,
  },
  cardFace: {
    backfaceVisibility: 'hidden',
  },
  gradient: {
    height: 4,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  button: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  buttonText: {
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  qrButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  frontBackContainer: {
    flex: 1,
  },
  backMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  qrBorder: {
    alignItems: 'center',
    marginHorizontal: 40,
    backgroundColor: colors.white,
    borderWidth: 5,
    paddingVertical: 12,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  qrButtonRow: {
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row',
    marginVertical: 32,
  },
  editButton: {
    borderRadius: 8,
    alignSelf: 'center',
  },
  header: {
    paddingBottom: 10,
  },
  keyboardView: {
    flex: 1,
  },
  gradientTop: {
    top: 0,
  },
  gradientBottom: {
    bottom: 0,
  },
  generateButtonContainer: {
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonTextActive: {
    color: colors.secondary,
  },
  buttonTextInactive: {
    color: colors.white,
  },
  orText: {
    textAlign: 'center',
    fontSize: fontSize.lg,
    color: colors.white,
    fontFamily: fonts.bold,
  },
});

export default styles;
