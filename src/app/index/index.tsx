import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { Header } from '@/components/Header'

import { ThemeProvider } from 'styled-components/native'
import theme from '@/theme'
import { Goal } from '@/components/Goal'
import { Meals } from '@/components/Meals'
import { Container } from './styles'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Container 
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <Goal />
          <Meals />
        </Container>
      </SafeAreaView>
    </ThemeProvider>
  )
}