import Button from "../Button/Button";
import Input from "../Input/Input";
import styled from "styled-components";

export const AddLinkLayout = styled.div``;

export const InnerBox = styled.div<{ $isInterSecting: boolean }>`
  @media (max-width: 1124px) {
    width: 100%;
  }
  ${({ $isInterSecting }) =>
    $isInterSecting === true &&
    `
    position: fixed;
    z-index: 40;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--gray5-color);
    box-shadow: 0 10px 30px rgba(188, 188, 188, 0.3);
  `}
`;

export const FormContainer = styled.div<{ $isInterSecting: boolean }>`
  display: flex;
  justify-content: center;
  padding: 60px 32.5px 90px 32.5px;

  @media (max-width: 767px) {
    display: block;
  }

  ${({ $isInterSecting }) =>
    $isInterSecting &&
    `
    padding: 24px 32.5px;
  `}
`;

export const FormBox = styled.form`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  padding: 10px 16px;
  top: 50%;
  transform: translateY(-18px);
  right: 20px;

  @media (max-width: 767px) {
    right: 10px;
  }
`;

export const IconImgBox = styled.div`
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
  padding: 16px 20px 16px 45px;
  border: 1px solid var(--primary-color);
  outline: none;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 53px;
    padding: 8px 10px 8px 45px;
  }
`;
