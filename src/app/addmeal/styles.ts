import { Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_5};
  height: 100%;
  `

export const Form = styled.View`
justify-content: space-between;
  gap: 24px;
  padding: 33px 24px 0;
  height: 100%;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.colors.gray_7};
`

export const FormText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.size.title.xs};
    color: ${theme.colors.gray_2};
    font-family: ${theme.font.family.bold};
  `}
`

export const FormInput = styled(TextInput)`
  height: 48px;
  width: 100%;

  margin-top: 4px;
  padding: 14px;

  border: 1px solid ${({ theme }) => theme.colors.gray_5};
  border-radius: 6px;
`

export const CreateMealButton = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.gray_2};
  
  width: 100%;
  height: 50px;
`

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.body.s};
  `};
`