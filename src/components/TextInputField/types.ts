import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type TextInputFieldProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;
