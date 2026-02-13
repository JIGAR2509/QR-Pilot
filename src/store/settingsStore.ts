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
  notificationsEnabled: boolean;
  toggleNotifications: () => void;
  welcomeNotificationShown: boolean;
  setWelcomeNotificationShown: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    set => ({
      vibrationEnabled: false,
      toggleVibration: () =>
        set(state => ({ vibrationEnabled: !state.vibrationEnabled })),
      beepEnabled: false,
      toggleBeep: () => set(state => ({ beepEnabled: !state.beepEnabled })),
      language: 'en',
      setLanguage: lang => set({ language: lang }),
      notificationsEnabled: true,
      toggleNotifications: () =>
        set(state => ({ notificationsEnabled: !state.notificationsEnabled })),
      welcomeNotificationShown: false,
      setWelcomeNotificationShown: () =>
        set({ welcomeNotificationShown: true }),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
