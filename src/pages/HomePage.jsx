import { Link } from 'react-router-dom';
import * as S from './HomePage.styled';

const Homepage = () => {
  return (
    <S.HomepageLayout>
      <Link to='/folder'>
        <S.StyledButton text={'folder page'} />
      </Link>
      <Link to='/shared'>
        <S.StyledButton text={'shared page'} />
      </Link>
    </S.HomepageLayout>
  );
};

export default Homepage;
