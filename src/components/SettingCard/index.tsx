/* eslint-disable react-native/no-inline-styles */
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SettingCardProps } from './types';
import styles from './styles';
import Gradient from '../Gradient';
import { colors } from '../../theme/colors';
import { fontSize } from '../../theme/typography';
import { fonts } from '../../theme/fonts';

const SettingCard = ({
  description,
  Icon,
  title,
  onChangeValue,
  isSwitch,
  value,
  rightIcon: RightIcon,
  text,
  onPress,
  IconHeight,
  IconWidth,
}: SettingCardProps) => {
  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <>
      <CardContainer
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.container}
      >
        <Gradient
          colors={[colors.primary, colors.white, colors.primary]}
          angle={90}
          style={[styles.gradient, { bottom: 0 }]}
        />
        <View style={styles.content}>
          <Icon height={IconHeight ?? 20} width={IconWidth ?? 20} />
          <View style={styles.textContainer}>
            <Text
              style={[
                {
                  fontSize: fontSize.lg,
                  fontFamily: fonts.bold,
                },
                styles.texts,
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                {
                  fontSize: fontSize.sm,
                  fontFamily: fonts.normal,
                },
                styles.texts,
              ]}
            >
              {description}
            </Text>
          </View>
          {text && (
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontFamily: fonts.bold,
                  fontSize: fontSize.md,
                }}
              >
                {text}
              </Text>
            </View>
          )}
          {RightIcon && (
            <RightIcon height={16} width={16} fill={colors.white} />
          )}
          {isSwitch && (
            <View>
              <Switch
                value={value}
                onValueChange={onChangeValue}
                trackColor={{ false: colors.darkGray, true: colors.primary }}
                thumbColor={colors.white}
                ios_backgroundColor={colors.darkGray}
              />
            </View>
          )}
        </View>
      </CardContainer>
    </>
  );
};

export default SettingCard;
