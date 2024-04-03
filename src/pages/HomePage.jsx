import { Link } from 'react-router-dom';
import * as S from './HomePage.style';

const Homepage = () => {
  return (
    <S.Wrap>
      <Link to="/folder">
        <S.StyledButton>folder</S.StyledButton>
      </Link>
      <Link to="/shared">
        <S.StyledButton>shared</S.StyledButton>
      </Link>
    </S.Wrap>
  );
};

export default Homepage;
