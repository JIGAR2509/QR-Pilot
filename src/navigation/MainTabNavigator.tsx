/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenerateScreen from '../screens/Generate';
import HistoryScreen from '../screens/History';
import { colors } from '../theme/colors';
import QRIcon from '../assets/icons/qr_tab.svg';
import HistoryIcon from '../assets/icons/history.svg';
import CreateIcon from '../assets/icons/create.svg';
import CreateIconYellow from '../assets/icons/create_yellow.svg';
import HisoryIconYellow from '../assets/icons/history_yellow.svg';
import QRIconYellow from '../assets/icons/qr_yellow.svg';
import { fonts } from '../theme/fonts';
import QRScreen from '../screens/QR';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TAB_HEIGHT = 70;
const Tab = createBottomTabNavigator();

const AnimatedTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const tabBarWidth = width - 32;
  const tabWidth = tabBarWidth / state.routes.length;

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withSpring(state.index * tabWidth, {
      stiffness: 200,
    });
  }, [state.index, tabWidth, translateX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={[styles.safeWrapper, { bottom: inset.bottom }]}>
      <View style={styles.tabBarWrapper}>
        <Animated.View
          style={[
            styles.animatedIndicator,
            { width: tabWidth },
            indicatorStyle,
          ]}
        >
          <LinearGradient
            useAngle
            angle={90}
            colors={[colors.primary, colors.white]}
            style={styles.gradient}
          />
        </Animated.View>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[styles.tabItem, { width: tabWidth }]}
              activeOpacity={0.8}
            >
              {options.tabBarIcon?.({
                focused,
                color: '',
                size: 0,
              })}
              <Animated.Text
                style={[
                  styles.label,
                  { color: focused ? colors.primary : colors.white },
                ]}
              >
                {options.tabBarLabel as string}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="QRScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: fonts.medium,
          paddingTop: 3,
        },
      }}
      tabBar={props => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="QRScreen"
        component={QRScreen}
        options={{
          tabBarLabel: 'QR',
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <QRIconYellow width={28} height={28} />
              ) : (
                <QRIcon width={28} height={28} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GenerateScreen"
        component={GenerateScreen}
        options={{
          tabBarLabel: 'Generate',
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <CreateIconYellow height={35} width={35} />
              ) : (
                <CreateIcon width={35} height={35} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              {focused ? (
                <HisoryIconYellow width={28} height={28} />
              ) : (
                <HistoryIcon width={28} height={28} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
    paddingTop: 10,
  },
  safeWrapper: {
    position: 'absolute',
    left: 16,
    right: 16,
  },
  tabBarWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: TAB_HEIGHT,
    borderRadius: 16,
    alignItems: 'center',
    overflow: 'hidden',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: TAB_HEIGHT,
  },
  animatedIndicator: {
    position: 'absolute',
    top: 0,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.primary,
    overflow: 'hidden',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.medium,
  },
  gradient: { flex: 1 },
});

export default MainTabNavigator;
