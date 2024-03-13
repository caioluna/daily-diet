import { Pressable, View } from 'react-native';

import {
  Body,
  Container,
  Hero,
  StatisticsView,
  Subtitle,
  Title,
} from './styles';
import { Link } from 'expo-router';
import theme from '@/theme';
import { ArrowLeft } from 'phosphor-react-native';
import { StatisticContainer } from '@/components/StatisticContainer';
import { Header } from '@/components/Header';

export default function Statistics() {
  return (
    <Container>
      <Header slim color={theme.colors.green_dark} link="/" />

      <Hero>
        <Title>90,86%</Title>
        <Body>das refeições dentro da dieta</Body>
      </Hero>

      <StatisticsView>
        <Subtitle>Estatísticas gerais</Subtitle>
        <StatisticContainer
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticContainer title="109" subtitle="refeições registradas" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: 12,
          }}
        >
          <StatisticContainer
            title="99"
            subtitle="refeições dentro da dieta"
            color={theme.colors.green_light}
          />
          <StatisticContainer
            title="10"
            subtitle="refeições fora da dieta"
            color={theme.colors.red_light}
          />
        </View>
      </StatisticsView>
    </Container>
  );
}
