import { Header } from '@/components/Header';
import { Container } from './styles';
import theme from '@/theme';

export default function AddMeal() {
  return (
    <Container>
      <Header link="/" color={theme.colors.gray_2} title="Nova refeição" />
    </Container>
  );
}
