import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";

export const FormBox = styled.div`
  margin: 40px 0;
  padding: 0 32.5px;
`;

export const Form = styled.form`
  position: relative;

  > button {
    cursor: pointer;
    border: none;
    background-color: #f5f5f5;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-10.25px);
  }

  > input {
    width: 1060px;
    padding: 15px 15px 15px 45px;
    box-sizing: border-box;
    border: none;
    background-color: #f5f5f5;
    border-radius: 10px;

    > div {
      position: absolute;
      top: 50%;
      transform: translate(-12px);
    }

    @media (max-width: 1124px) {
      width: 700px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const SearchLayout = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledCloseButton = styled(CloseButton)`
  top: 50%;
  right: 10px;
  transform: translateY(-12px);
`;
