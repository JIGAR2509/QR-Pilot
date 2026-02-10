import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/typography';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { SliderProps } from './types';

const Slider = ({ focusedView, onChange }: SliderProps) => {
  const { t } = useTranslation();
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const { width } = useWindowDimensions();
  const PADDING_HORIZONTAL = spacing.xl * 2;
  const BORDER_WIDTH = 2;
  const CONTAINER_PADDING = spacing.xxs + 1;
  const TOTAL_SPACING =
    PADDING_HORIZONTAL + BORDER_WIDTH * 2 + CONTAINER_PADDING * 2;
  const TAB_WIDTH = (width - TOTAL_SPACING) / 2;

  return (
    <View style={styles.tabBar}>
      <Animated.View
        style={[styles.slider, { width: TAB_WIDTH }, animatedStyle]}
      >
        <LinearGradient
          colors={[colors.white, colors.primary]}
          angle={90}
          useAngle
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      <TouchableOpacity
        style={styles.tab}
        activeOpacity={0.8}
        onPress={() => {
          onChange(0);
          translateX.value = withTiming(0, { duration: 300 });
        }}
      >
        <Text
          style={[
            styles.tabText,
            focusedView === 0 ? { color: colors.black } : '',
          ]}
        >
          {t('home.scan')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.tab}
        onPress={() => {
          onChange(1);
          translateX.value = withTiming(TAB_WIDTH, { duration: 300 });
        }}
      >
        <Text
          style={[
            styles.tabText,
            focusedView === 1 ? { color: colors.black } : '',
          ]}
        >
          {t('home.create')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Slider;
