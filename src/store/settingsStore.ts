import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingsState {
  vibrationEnabled: boolean;
  toggleVibration: () => void;
  beepEnabled: boolean;
  toggleBeep: () => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    set => ({
      vibrationEnabled: true,
      toggleVibration: () =>
        set(state => ({ vibrationEnabled: !state.vibrationEnabled })),
      beepEnabled: true,
      toggleBeep: () => set(state => ({ beepEnabled: !state.beepEnabled })),
      language: 'en',
      setLanguage: lang => set({ language: lang }),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
