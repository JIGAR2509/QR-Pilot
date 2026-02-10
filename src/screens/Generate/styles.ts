import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  container: { paddingHorizontal: 0 },
  header: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxl },
  listContent: {
    paddingLeft: spacing.xxxl - 2,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
