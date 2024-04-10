import { Link } from 'react-router-dom';
import * as S from './HomePage.styled';

const Homepage = () => {
  return (
    <S.HomepageLayout>
      <Link to="/folder">
        <S.StyledButton>folder</S.StyledButton>
      </Link>
      <Link to="/shared">
        <S.StyledButton>shared</S.StyledButton>
      </Link>
    </S.HomepageLayout>
  );
};

export default Homepage;
