import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { Header } from '@/components/Header'

import { ThemeProvider } from 'styled-components/native'
import theme from '@/theme'
import { Goal } from '@/components/Goal'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Goal />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}