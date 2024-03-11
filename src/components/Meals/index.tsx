import { Plus } from 'phosphor-react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { AddMealButton, ButtonTitle, Container, DateText, MealsContainer, Subtitle } from './styles'
import theme from '@/theme'
import { MealItem } from '../MealItem'

export function Meals() {
  return (
    <Container>
      <Subtitle>Refeições</Subtitle>

      <AddMealButton onPress={() => {}}>
        <Plus size={18} color={theme.colors.white} /> 
        <ButtonTitle>Nova refeição</ButtonTitle>
      </AddMealButton>

      <MealsContainer>
        <DateText>12.08.22</DateText>
        <MealItem />
      </MealsContainer>
    </Container>
  )
}