import styled from "styled-components";

export const Button = styled.button<{ $variant: string; $isActive?: boolean }>`
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;
  color: var(--white-color);

  ${({ $variant }) =>
    $variant === "addFolder" &&
    `
      width: 90px;
      background-color: var(--white-color);
      color: var(--primary-color);

      &::after {
        content: '+';
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
    ($variant === "deleteFolder" || $variant === "deleteLink") &&
    `
      background-color: var(--red-color);
    `}

  ${({ $variant }) =>
    $variant === "default" &&
    `
      background-image: linear-gradient(270deg, #6ae3fe, var(--primary-color));
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
