import theme from "@/theme";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView<{ $color?: string }>`
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 89px;

  border-radius: 8px;
  background-color: ${props => props.$color || theme.colors.gray_6};
`

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.title.m};
  `};
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: ${({ theme }) => theme.font.size.body.s};
  text-align: center;
`