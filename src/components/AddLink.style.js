import Button from './Button.style';
import Input from './Input.style';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0 90px 0;
`;

export const Form = styled.form`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  padding: 10px 16px;
  top: 50%;
  transform: translateY(-18px);
  right: 20px;
`;

export const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-10.25px);
  z-index: 10;
`;

export const StyledInput = styled(Input)`
  background-color: var(--white-color);
  width: 800px;
  height: 69px;
  border: 1px solid var(--primary-color);
  outline: none;
`;
