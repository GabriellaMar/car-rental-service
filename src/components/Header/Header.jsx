import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import { HeaderContainer } from './Header.styled';


export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Navigation />
      </Container>
    </HeaderContainer>
  );
};
