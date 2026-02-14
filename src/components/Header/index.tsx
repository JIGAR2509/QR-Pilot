import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SettingIcon from '../../assets/icons/setting.svg';
import BackIcon from '../../assets/icons/back.svg';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { spacing } from '../../theme/typography';
import styles from './styles';
import { HeaderProps } from './types';

const Header = ({ title, backIcon, rightIcon, style }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.container, style]}>
      {backIcon && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <BackIcon height={30} width={30} />
        </TouchableOpacity>
      )}
      <View style={[styles.box, backIcon ? { marginLeft: spacing.lg } : '']}>
        {title && <Text style={styles.title}>{title}</Text>}
        {rightIcon && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SettingScreen')}
          >
            <SettingIcon height={30} width={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
