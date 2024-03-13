import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_5};
`

export const Header = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 30px 24px 0;
  height: 105px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray_5};

`

