import { AllRoutes, Link } from 'expo-router';
import { BackButton, Container, Title } from './styles';
import { ArrowLeft } from 'phosphor-react-native';

type HeaderProps = {
  link: AllRoutes;
  color: string;
  title?: string;
  slim?: boolean;
};

export function Header({ link, color, title, slim = false }: HeaderProps) {
  return (
    <Container $slim={slim}>
      <Link href={link} asChild>
        <BackButton>
          <ArrowLeft color={color} size={24} />
        </BackButton>
      </Link>

      <Title>{title}</Title>
    </Container>
  );
}
