import { Image } from 'react-native'

import Logo from './img/logo.png'
import { Container, LogoImage, ProfilePicture } from './styles';

export function Header() {
  
  return (
    <Container>  
      <LogoImage source={Logo} />

      <ProfilePicture>
        <Image source={Logo}/>
      </ProfilePicture>
    </Container> 
  )
}