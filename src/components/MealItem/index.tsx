import { View, Text } from 'react-native'
import React from 'react'
import { Container, MealText, MealType, Separator, TimeText } from './styles'

export function MealItem() {
  return (
    <Container>
      <TimeText>20:00</TimeText>
        <Separator />
      <MealText>X-tudo</MealText>
        <MealType />
    </Container>
  )
}