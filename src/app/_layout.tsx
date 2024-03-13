import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { Slot, Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';
import theme from '@/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <StatusBar animated={true} barStyle={'dark-content'} translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      />
    </ThemeProvider>
  ) : (
    <ActivityIndicator />
  );
}
