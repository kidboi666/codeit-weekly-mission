import styled from "styled-components";

export const Button = styled.button<{
  $variant: string;
  $isActive?: boolean;
  $width?: string;
}>`
  ${({ $width }) => `width: ${$width}`};
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;
  color: var(--white-color);
  transition: all 0.3s;

  ${({ $variant }) =>
    $variant === "addFolder" &&
    `
      height: 35px;
      background-color: var(--white-color);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      border-radius: 5px;
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
        z-index: 60;
        background-color: var(--primary-color);
        color: var(--white-color);
        box-shadow:0px 2px 8px 0px rgba(51, 50, 54, 0.5);
        
        &:hover {
          transform: translateX(-63.5px) scale(1.1);
        }
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

      &:hover {
        transform: translateY(-18px) scale(1.1);
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

      &:hover {
        transform: scale(1.1);
      }
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
      background-color: ${
        $isActive ? "var(--primary-color)" : "var(--white-color)"
      };
      color: ${$isActive ? "var(--white-color)" : "var(--black-color)"};
      cursor: pointer;

      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
      }
    `}

    ${({ $variant, $isActive }) =>
    $variant === "memoButton" &&
    `
      border: 1px solid #F8CA59;
      line-height: 0;
      height: 35px;
      background-color: ${$isActive ? "#f8ca59" : "var(--white-color)"};
      color: ${$isActive ? "var(--white-color)" : "var(--black-color)"};

      &:hover {
        background-color: #f8ca59;
        color: var(--white-color);
      }
    `}
`;
