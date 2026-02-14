import './src/translation';
import { Platform, StyleSheet } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/ToastConfig';
import { useNotification } from './src/hooks/useNotification';

const App = () => {
  const { initialize, sendWelcome } = useNotification();

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
    const initNotifications = async () => {
      await initialize();
      await sendWelcome();
    };
    initNotifications();
  }, [initialize, sendWelcome]);

  return (
    <>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
      <Toast config={toastConfig} position="top" topOffset={50} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
