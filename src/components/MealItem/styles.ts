import styled, { css } from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  padding: 14px 16px 14px 12px;
  height: 50px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.gray_5};
  border-radius: 6px;
`

export const Separator = styled.View`
  height: 14px;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({theme}) => theme.colors.gray_4};
`

export const TimeText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.font.size.body.xs};
    font-family: ${theme.font.family.bold};
  `}
`

export const MealText = styled.Text`
  flex: 1;

  ${({theme}) => css`
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.size.body.m};
    color: ${theme.colors.gray_2};
  `}
`

export const MealType = styled.View<{$type: string}>`
  width: 14px;
  height: 14px;

  border-radius: 100px;

  ${({$type}) => {
    switch ($type) {
      case 'in': 
        return css`
          background-color: ${({theme}) => theme.colors.green_mid};
          `;
        default: 
          return css`
          background-color: ${({theme}) => theme.colors.red_mid};
          `;
      }
    }
  }
`