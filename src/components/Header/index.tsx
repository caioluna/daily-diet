import { Image } from 'react-native'

import Logo from './img/logo.png'
import { Container, LogoImage, ProfilePicture } from './styles';

export function Header() {
  
  return (
    <Container>  
      <LogoImage source={Logo} />

      <ProfilePicture>
        <Image source={{uri: 'https://c.stocksy.com/a/9Cu200/z9/692673.jpg', width: 40, height: 40, }}/>
      </ProfilePicture>
    </Container> 
  )
}