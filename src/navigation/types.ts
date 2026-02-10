export type RootStackParamList = {
  OnboardingScreen: undefined;
  MainTab: { screen: keyof MainTabParamList };
  SettingScreen: undefined;
  DetailFillScreen: { title: string };
};

export type MainTabParamList = {
  QRScreen: undefined;
  GenerateScreen: undefined;
  HistoryScreen: undefined;
};
