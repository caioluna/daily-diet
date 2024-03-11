import { Container, MealText, MealType, Separator, TimeText } from './styles'
import { DataProps } from '../Meals'

export function MealItem({ label, time, type }: DataProps) {
  return (
    <Container>
      <TimeText>{time}</TimeText>
      <Separator />

      <MealText 
        numberOfLines={1} 
        ellipsizeMode='tail'
      >
        {label}
      </MealText>

      <MealType $type={type} />
    </Container>
  )
}