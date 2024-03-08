import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'


export const Container = styled.View`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: 33px auto 40px;
  padding: 20px;
  
  background-color: ${({theme}) => theme.colors.green_light};
  border-radius: 8px;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.font.family.bold};
  font-size: 32px;
  `

export const Body = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: 14px;
`

export const ArrowButton = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 24,
  color: theme.colors.green_dark,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`