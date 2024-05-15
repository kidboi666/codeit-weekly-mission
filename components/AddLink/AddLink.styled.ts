import Input from "../Input/Input";
import styled from "styled-components";

export const AddLinkLayout = styled.div`
  padding: 0 32.5px;
`;

export const InnerBox = styled.div`
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FormBox = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
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
