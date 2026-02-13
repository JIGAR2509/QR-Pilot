import notifee, {
  AndroidImportance,
  AndroidStyle,
  AuthorizationStatus,
} from '@notifee/react-native';
import { Platform } from 'react-native';

const CHANNEL_ID = 'qrpilot-default';

export async function setupNotificationChannel(): Promise<void> {
  if (Platform.OS === 'android') {
    await notifee.createChannel({
      id: CHANNEL_ID,
      name: 'QRPilot Notifications',
      importance: AndroidImportance.HIGH,
    });
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  const settings = await notifee.requestPermission();
  return settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED;
}

export async function checkNotificationPermission(): Promise<boolean> {
  const settings = await notifee.getNotificationSettings();
  return settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED;
}

export async function showWelcomeNotification(): Promise<void> {
  await notifee.displayNotification({
    title: 'Welcome to QRPilot!',
    body: 'Start scanning or generating QR codes.',
    android: {
      channelId: CHANNEL_ID,
      smallIcon: 'ic_launcher',
      importance: AndroidImportance.HIGH,
      pressAction: { id: 'default' },
    },
  });
}

export async function showQRGeneratedNotification(
  imageUri: string,
  category: string,
): Promise<void> {
  await notifee.displayNotification({
    title: 'QR Code Generated!',
    body: `Your ${category} QR code is ready.`,
    android: {
      channelId: CHANNEL_ID,
      smallIcon: 'ic_launcher',
      importance: AndroidImportance.HIGH,
      pressAction: { id: 'default' },
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: imageUri,
      },
    },
    ios: {
      attachments: [
        {
          url: imageUri,
          typeHint: 'public.png',
        },
      ],
    },
  });
}
