import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { QROption } from '../../screens/Generate/data';
import { colors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

type OptionCardProps = {
  item: QROption;
};

const OptionCard = ({ item }: OptionCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('DetailFillScreen', { title: item.title })
      }
    >
      <item.Icon />
      <LinearGradient
        colors={[colors.white, colors.primary]}
        angle={360}
        useAngle
        style={styles.gradient}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default OptionCard;
