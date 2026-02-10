import { Dimensions, StyleSheet } from 'react-native';
import { spacing } from '../../theme/typography';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderRadius: 4,
    marginTop: spacing.xxl,
    marginBottom: screenHeight / 11,
  },
  contentStyle: { gap: spacing.xxs },
});

export default styles;
