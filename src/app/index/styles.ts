import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.white}
`