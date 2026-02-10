import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding';
import MainTabNavigator from './MainTabNavigator';
import SettingScreen from '../screens/Setting';
import DetailFillScreen from '../screens/DetailFill';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={OnboardingScreen} name="OnboardingScreen" />
      <Stack.Screen component={MainTabNavigator} name="MainTab" />
      <Stack.Screen component={SettingScreen} name="SettingScreen" />
      <Stack.Screen component={DetailFillScreen} name="DetailFillScreen" />
    </Stack.Navigator>
  );
};

export default RootStack;
