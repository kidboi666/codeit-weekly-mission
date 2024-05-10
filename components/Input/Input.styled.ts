import styled from "styled-components";

export const Input = styled.input<{ $variant?: string; width?: string; $error?: string }>`
  ${({ width }) => `width: ${width}`};
  position: relative;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  background-color: #f5f5f5;

  ${({ $variant, $error }) =>
    $variant === "sign" &&
    `
      background-color: var(--white-color);
      border: 1px solid ${$error ? "var(--red-color)" : "var(--gray2-color)"};
    `}

  ${({ $variant }) =>
    $variant === "search" &&
    `
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
    `}

  ${({ $variant }) =>
    $variant === "addLink" &&
    `
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
    `}
`;

export const EyeSection = styled.div`
  > img {
    width: 20px;
    position: absolute;
    right: 15px;
    top: 43px;
    cursor: pointer;
    z-index: 10;
  }
`;
export const ErrorMessage = styled.div`
  margin-top: 6px;
  color: red;
  font-size: 14px;
`;
