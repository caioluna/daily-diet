import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.green_light};
`

export const Hero = styled.View`
  justify-content: center;
  align-items: center;
  height: 170px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font.family.bold};
  font-size: 32px;
`

export const Body = styled.Text`
  font-family: ${({ theme }) => theme.font.family.regular};
  font-size: 14px;
`

export const StatisticsView = styled.View`
  top: -20px;

  align-items: center;
  gap: 12px;

  padding: 33px 24px 0;

  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.colors.gray_7};
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.size.title.xs};
    color: ${theme.colors.gray_1};
    font-family: ${theme.font.family.bold};
  `}
`