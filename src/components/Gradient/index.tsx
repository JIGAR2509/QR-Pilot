import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GradientProps } from './types';

const Gradient = ({ children, angle, ...rest }: GradientProps) => {
  return (
    <LinearGradient angle={angle} useAngle {...rest}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
