import { Goal } from '@/components/Goal';
import { Meals } from '@/components/Meals';
import { Container, Header, LogoImage, ProfilePicture } from './styles';
import { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import Logo from './img/logo.png';

export default function Home() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Container>
      <Header>
        <LogoImage source={Logo} />

        <ProfilePicture>
          <Image
            source={{
              uri: 'https://c.stocksy.com/a/9Cu200/z9/692673.jpg',
              width: 40,
              height: 40,
            }}
          />
        </ProfilePicture>
      </Header>
      <Goal />
      <Meals />
    </Container>
  );
}
