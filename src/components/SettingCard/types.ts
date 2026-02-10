import React from 'react';
import { SvgProps } from 'react-native-svg';

export type SettingCardProps = {
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
  isSwitch?: boolean;
  value?: boolean;
  onChangeValue?: (val: boolean) => void;
  text?: string;
  rightIcon?: React.FC<SvgProps>;
};
