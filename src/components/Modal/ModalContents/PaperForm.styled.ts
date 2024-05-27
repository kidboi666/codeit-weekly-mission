import styled from "styled-components";
import Input from "../../Input/Input";

export const PaperContentBox = styled.textarea<{ onChange: any }>`
  width: 100%;
  height: 100px;
  resize: none;
  position: relative;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  background-color: var(--white-color);
  border: 1px solid var(--gray2-color);

  &:focus {
    border: 1px solid var(--primary-color);
  }
`;

export const ColorOptionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
`;
