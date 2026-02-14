import { StyleProp, ViewStyle } from 'react-native';

export type HeaderProps = {
  title?: string;
  backIcon?: boolean;
  rightIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};
