/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import HistoryCard from '../../components/HistoryCard';
import styles from './styles';
import Slider from '../../components/Slider';
import { useHistoryStore } from '../../store/historyStore';
import Animated, { FadeIn } from 'react-native-reanimated';
import EmptyElement from '../../components/EmptyElement';
import ConfirmationSheet from '../../components/ConfirmationSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const HistoryScreen = () => {
  const sheetRef = React.useRef<BottomSheetModal>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [focusedView, setFocusedView] = useState(0);
  const { history, removeFromHistory } = useHistoryStore();
  const { t } = useTranslation();

  const filteredData =
    focusedView === 0
      ? history.filter(item => item.type === 'scan')
      : history.filter(item => item.type === 'create');

  const handleDelete = useCallback((id: string) => {
    setSelectedId(id);
    sheetRef.current?.present();
  }, []);

  const onConfirmDelete = useCallback(() => {
    if (selectedId) {
      removeFromHistory(selectedId);
      sheetRef.current?.dismiss();
      setSelectedId(null);
      if (expandedId === selectedId) {
        setExpandedId(null);
      }
    }
  }, [selectedId, removeFromHistory, expandedId]);

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  }, []);

  return (
    <Layout>
      <Header title={t('history.title')} rightIcon />
      <Slider focusedView={focusedView} onChange={setFocusedView} />
      <View style={styles.listContainer}>
        <Animated.FlatList
          entering={FadeIn.duration(500)}
          data={filteredData}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentStyle}
          renderItem={({ item }) => (
            <HistoryCard
              item={item}
              onDelete={handleDelete}
              isExpanded={expandedId === item.id}
              onToggleExpand={() => handleToggleExpand(item.id)}
            />
          )}
          ListEmptyComponent={() => <EmptyElement />}
        />
      </View>
      <ConfirmationSheet
        ref={sheetRef}
        onConfirm={onConfirmDelete}
        description={t('common.delete_history_description')}
        confirmText={t('common.delete')}
        cancelText={t('common.cancel')}
        title={t('common.delete')}
      />
    </Layout>
  );
};

export default HistoryScreen;
