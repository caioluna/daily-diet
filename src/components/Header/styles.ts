import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View<{ $slim: boolean }>`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  ${(props) => props.$slim
    ? css`
      height: 0;
      padding: 0;
    `
    : css`
      padding: 30px 24px 0;
    `};

  z-index: 1;
`

export const BackButton = styled(Pressable)`
  position: absolute;
  left: 24px;
  top: 30px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.bold};
    font-size: ${theme.font.size.title.s};
  `}
`