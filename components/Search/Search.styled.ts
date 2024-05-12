import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";
import Input from "../Input/Input";

export const FormBox = styled.div`
  margin: 40px 0;
  padding: 0 32.5px;
`;

export const Form = styled.form`
  position: relative;

  > button {
    position: absolute;
    left: 10px;
    top: 50%;
    z-index: 40;
    border: none;
    cursor: pointer;
    transform: translateY(-10.25px);
    background-color: #f5f5f5;
  }
`;

export const SearchLayout = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledInput = styled(Input)`
    width: 1060px;
    padding: 15px 15px 15px 45px;
    box-sizing: border-box;
    border: none;
    background-color: #f5f5f5;
    border-radius: 10px;

    @media (max-width: 1124px) {
      width: 700px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const SearchResultSection = styled.div`
  margin-bottom: 40px;
  font-size: 32px;
  text-align: left;
  padding: 0 32.5px;

  > span:last-child {
    color: var(--gray2-color);
  }
`;

export const StyledCloseButton = styled(CloseButton)`
  top: 50%;
  right: 10px;
  transform: translateY(-12px);
`;
