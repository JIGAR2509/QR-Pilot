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
  rightIcon,
  text,
}: SettingCardProps) => {
  return (
    <>
      <View style={styles.container}>
        <Gradient
          colors={[colors.primary, colors.white, colors.primary]}
          angle={90}
          style={[styles.gradient, { bottom: 0 }]}
        />
        <View style={styles.content}>
          <Icon height={20} width={20} />
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
              <Text>{text}</Text>
              <TouchableOpacity>
                <Text></Text>
              </TouchableOpacity>
            </View>
          )}
          {isSwitch && (
            <Switch
              value={value}
              onValueChange={onChangeValue}
              trackColor={{ false: colors.primary, true: colors.primary }}
              thumbColor={colors.white}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default SettingCard;
