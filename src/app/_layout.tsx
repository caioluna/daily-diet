import { ActivityIndicator } from 'react-native'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Slot } from 'expo-router'


export default function App() {
  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  
  return (
      fontsLoaded ? <Slot /> : <ActivityIndicator />
  )
}