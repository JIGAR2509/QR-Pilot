import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1,
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
});

export default styles;
