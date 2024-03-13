import { Header } from '@/components/Header';
import { Goal } from '@/components/Goal';
import { Meals } from '@/components/Meals';
import { Container } from './styles';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

export default function Home() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Container>
      <Header />
      <Goal />
      <Meals />
    </Container>
  );
}
