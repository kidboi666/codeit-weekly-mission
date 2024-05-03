import styled from 'styled-components';
import Button from '../Button/Button';

export const LoginLayout = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const UserProfile = styled.a`
  text-decoration: none;
  color: #000;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  padding: 15px 40px;
`;
