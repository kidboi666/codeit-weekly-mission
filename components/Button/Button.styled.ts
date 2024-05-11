import styled from "styled-components";

export const Button = styled.button<{ $variant: string; $isActive?: boolean; $width?: string }>`
  ${({ $width }) => `width: ${$width}`};
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;
  color: var(--white-color);

  ${({ $variant }) =>
    $variant === "addFolder" &&
    `
      height: 35px;
      background-color: var(--white-color);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      border-radius: 5px;
      transition: all 0.3s;
      line-height: 14px;

      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
      }

      @media (max-width: 767px) {
        width: 127px;
        position: fixed;
        padding: 8px 24px;
        bottom: 117px;
        left: 50%;
        border-radius: 20px;
        border: 1px solid var(--white-color);
        transform: translateX(-63.5px);
        z-index: 40;
        background-color: var(--primary-color);
        color: var(--white-color);
        box-shadow:0px 2px 8px 0px rgba(51, 50, 54, 0.10);
      }
    `}

  ${({ $variant }) =>
    $variant === "addLink" &&
    `
      position: absolute;
      padding: 10px 16px;
      top: 50%;
      transform: translateY(-18px);
      right: 20px;
      background-image: linear-gradient(270deg, #6ae3fe, var(--primary-color));

      @media (max-width: 767px) {
        right: 10px;
      }  
  `}

  ${({ $variant }) =>
    ($variant === "deleteFolder" || $variant === "deleteLink") &&
    `
      padding: 16px 20px;
      background-color: var(--red-color);
      font-weight: 600;
      color: #f5f5f5;
    `}

  ${({ $variant }) =>
    $variant === "default" &&
    `
      padding: 16px 20px;
      background-image: linear-gradient(270deg, #6ae3fe, var(--primary-color));
      font-weight: 600;
      color: #f5f5f5;
    `}

  ${({ $variant }) =>
    $variant === "underBar" &&
    `
      padding: 0;
      background-color: var(--gray5-color);
      color: var(--primary-color);
      font-size: 16px;
      text-decoration: underline;
    `}
    
  ${({ $variant, $isActive }) =>
    $variant === "folderButton" &&
    `
      line-height: 0;
      height: 35px;
      padding: 8px 12px;
      border: 1px solid var(--primary-color);
      border-radius: 5px;
      background-color: ${$isActive ? "var(--primary-color)" : "var(--white-color)"};
      color: ${$isActive ? "var(--white-color)" : "var(--black-color)"};
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
      }
    `}
`;
