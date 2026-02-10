import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type HistoryItem = {
  id: string;
  value: string;
  type: 'scan' | 'create';
  category: string;
  createdAt: string;
};

interface HistoryState {
  history: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
  removeFromHistory: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    set => ({
      history: [],
      addToHistory: item =>
        set(state => ({
          history: [item, ...state.history],
        })),
      removeFromHistory: id =>
        set(state => ({
          history: state.history.filter(item => item.id !== id),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'history-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
