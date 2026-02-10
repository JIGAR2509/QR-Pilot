import { View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { QR_OPTIONS } from './data';
import OptionCard from '../../components/OptionCard';
import Animated, { FadeIn } from 'react-native-reanimated';
import Layout from '../../components/Layout';
import styles from './styles';

const GenerateScreen = () => {
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Header title="Generate" rightIcon />
      </View>
      <Animated.FlatList
        data={QR_OPTIONS}
        entering={FadeIn.duration(500)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <OptionCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

export default GenerateScreen;
