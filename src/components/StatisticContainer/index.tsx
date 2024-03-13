import { Container, Subtitle, Title } from './styles';

type Props = {
  color?: string;
  title: string;
  subtitle: string;
};

export function StatisticContainer({ color, subtitle, title }: Props) {
  return (
    <Container $color={color}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
