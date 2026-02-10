import { ReactNode } from 'react';
import { LinearGradientProps } from 'react-native-linear-gradient';

export type GradientProps = {
  children?: ReactNode;
  angle: number;
} & LinearGradientProps;
