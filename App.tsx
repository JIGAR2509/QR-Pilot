import './src/translation';
import { Platform } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/ToastConfig';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
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

export default App;
