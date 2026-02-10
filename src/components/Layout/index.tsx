import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LayoutProps } from './types';
import styles from './styles';

const Layout = ({ style, children }: LayoutProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Layout;
