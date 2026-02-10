import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type LayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
