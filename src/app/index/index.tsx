import { SafeAreaView } from 'react-native'

import { Header } from '@/components/Header'
import { Goal } from '@/components/Goal'
import { Meals } from '@/components/Meals'

import { ThemeProvider } from 'styled-components/native'
import { Container } from './styles'
import theme from '@/theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Container 
          // showsVerticalScrollIndicator={false}
        >
          <Header />
          <Goal />
          <Meals />
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  )
}