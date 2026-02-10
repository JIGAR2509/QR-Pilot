import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { fontSize } from '../../theme/typography';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  button: {
    borderRadius: 10,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    fontSize: fontSize.xxl,
    fontFamily: fonts.bold,
  },
});

export default styles;
