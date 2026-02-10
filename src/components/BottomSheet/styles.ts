import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: colors.gray,
    width: 60,
  },
  gradientBackground: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: { flex: 1 },
});

export default styles;
