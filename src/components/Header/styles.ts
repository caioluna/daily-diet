import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px 24px;
`

export const LogoImage = styled.Image`
  width: 82px;
  height: 37px;
`

export const ProfilePicture = styled.View`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.gray_2};
  border-radius: 100px;
  overflow: hidden;
`
