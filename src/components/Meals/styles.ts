import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
`

export const Subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.gray_1};
    font-size: ${theme.font.size.body.m};
    font-family: ${theme.font.family.regular};
  `}
`

export const AddMealButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 8px 0 32px;

  height: 50px;
  border-radius: 6px;

  background-color: ${({theme}) => theme.colors.gray_2};
`

export const ButtonTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.body.s};
  `}
`

export const DateText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.title.s};
    color: ${theme.colors.gray_1};
    background-color: ${theme.colors.white};
  `}
`