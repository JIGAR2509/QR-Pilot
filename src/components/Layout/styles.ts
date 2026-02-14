import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
});

export default styles;
