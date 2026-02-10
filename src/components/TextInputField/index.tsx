import { Text, TextInput, View } from 'react-native';
import React from 'react';
import { TextInputFieldProps } from './types';
import styles from './styles';
import { colors } from '../../theme/colors';

const TextInputField = ({ label, style, ...rest }: TextInputFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        placeholderTextColor={colors.secondary}
        style={[styles.input, style]}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default TextInputField;
