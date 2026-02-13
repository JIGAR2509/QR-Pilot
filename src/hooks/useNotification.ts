import { useCallback } from 'react';
import { useSettingsStore } from '../store/settingsStore';
import {
  showWelcomeNotification,
  showQRGeneratedNotification,
  requestNotificationPermission,
  setupNotificationChannel,
  checkNotificationPermission,
} from '../services/notificationService';

export const useNotification = () => {
  const notificationsEnabled = useSettingsStore(
    state => state.notificationsEnabled,
  );

  const initialize = useCallback(async () => {
    if (!notificationsEnabled) {
      return;
    }
    await setupNotificationChannel();
    await requestNotificationPermission();
  }, [notificationsEnabled]);

  const sendWelcome = useCallback(async () => {
    if (!notificationsEnabled) {
      return;
    }
    const { welcomeNotificationShown, setWelcomeNotificationShown } =
      useSettingsStore.getState();
    if (welcomeNotificationShown) {
      return;
    }
    const hasPermission = await checkNotificationPermission();
    if (!hasPermission) {
      return;
    }
    await showWelcomeNotification();
    setWelcomeNotificationShown();
  }, [notificationsEnabled]);

  const sendQRGenerated = useCallback(
    async (imageUri: string, category: string) => {
      if (!notificationsEnabled) {
        return;
      }
      const hasPermission = await checkNotificationPermission();
      if (!hasPermission) {
        return;
      }
      await showQRGeneratedNotification(imageUri, category);
    },
    [notificationsEnabled],
  );

  return { initialize, sendWelcome, sendQRGenerated };
};
