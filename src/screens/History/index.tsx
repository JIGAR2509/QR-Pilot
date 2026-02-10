import { View } from 'react-native';
import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import HistoryCard from '../../components/HistoryCard';
import styles from './styles';
import Slider from '../../components/Slider';
import { useHistoryStore } from '../../store/historyStore';
import Animated, { FadeIn } from 'react-native-reanimated';

const HistoryScreen = () => {
  const [focusedView, setFocusedView] = useState(0);
  const { history, removeFromHistory } = useHistoryStore();

  const filteredData =
    focusedView === 0
      ? history.filter(item => item.type === 'scan')
      : history.filter(item => item.type === 'create');

  const handleDelete = useCallback(
    (id: string) => {
      removeFromHistory(id);
    },
    [removeFromHistory],
  );

  return (
    <Layout>
      <Header title="History" rightIcon />
      <Slider focusedView={focusedView} onChange={setFocusedView} />
      <View style={styles.listContainer}>
        <Animated.FlatList
          entering={FadeIn.duration(500)}
          data={filteredData}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentStyle}
          renderItem={({ item }) => (
            <HistoryCard item={item} onDelete={handleDelete} />
          )}
        />
      </View>
    </Layout>
  );
};

export default HistoryScreen;
