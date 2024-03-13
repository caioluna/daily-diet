import { Link } from 'expo-router'
import { ArrowButton, Body, Container, Title } from './styles'

export function Goal() {
  return (
    <Link href={'/statistics/'} asChild>
      <Container>
        <ArrowButton />
        <Title>90,86%</Title>
        <Body>das refeições dentro da dieta</Body>
      </Container>
    </Link>
  )
}