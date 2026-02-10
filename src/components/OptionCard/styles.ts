import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize, spacing } from '../../theme/typography';

const { width } = Dimensions.get('window');

const ITEM_GAP = 30;
const ITEM_WIDTH = (width - ITEM_GAP * 4) / 3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginRight: ITEM_GAP,
    marginBottom: ITEM_GAP + 40,
    height: ITEM_WIDTH,
    width: ITEM_WIDTH,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
  },
  titleWrapper: {
    width: 70,
    paddingVertical: spacing.sm,
  },
  title: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
  gradient: {
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 8,
    bottom: -25,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});

export default styles;
