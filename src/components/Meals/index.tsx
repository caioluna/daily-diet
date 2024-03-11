import { SectionList, View } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { AddMealButton, ButtonTitle, Container, DateText, Subtitle } from './styles'
import theme from '@/theme'
import { MealItem } from '../MealItem'

export type DataProps = {
  time: string
  label: string
  type: string
}

export type ListDataProps = {
  title: string
  data: DataProps[]
}

export function Meals() {
  const DATA: ListDataProps[] = [
    {
      title: '12.08.22',
      data: [
        {
          time: '20:00',
          label: 'X-tudo',
          type: 'out',
        },
        {
          time: '16:00',
          label: 'Whey protein com leite',
          type: 'in',
        },
        {
          time: '12:30',
          label: 'Salada cesar com frango grelhado',
          type: 'in',
        },
        {
          time: '09:30',
          label: 'Vitamina de banana com abacate',
          type: 'in',
        },
      ]
    },
    {
      title: '11.08.22',
      data: [
        {
          time: '19:00',
          label: 'X-tudo',
          type: 'out',
        },
      ]
    },
  ]

  return (
    <Container>
      <Subtitle>Refeições</Subtitle>

      <AddMealButton onPress={() => {}}>
        <Plus size={18} color={theme.colors.white} /> 
        <ButtonTitle>Nova refeição</ButtonTitle>
      </AddMealButton>

      <SectionList 
        sections={DATA}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({ item }) => <MealItem {...item} />}
        renderSectionHeader={
          ({section: {title}}) => <DateText>{title}</DateText>
        }
        ItemSeparatorComponent={() => <View style={{ height: 8}} />}
        SectionSeparatorComponent={() => <View style={{ height: 8}} />}
      />
    </Container>
  )
}