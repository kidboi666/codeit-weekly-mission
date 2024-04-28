import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;
  color: var(--white-color);

  ${({ $variant }) =>
    $variant === 'addFolder' &&
    `
    background-color: var(--white-color);
    color: var(--primary-color);

    &::after {
      content: '+';
    }
    `}
  ${({ $variant }) =>
    ($variant === 'deleteFolder' || $variant === 'deleteLink') &&
    `
    background-color: var(--red-color);
    `}
  ${({ $variant }) =>
    $variant === 'default' &&
    `
    background-image: linear-gradient(270deg, #6ae3fe, var(--primary-color));
    `}
  ${({ $variant, $isActive }) =>
    $variant === 'folderButton' &&
    `
    line-height: 0;
    height: 35px;
    padding: 8px 12px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: ${
      $isActive ? 'var(--primary-color)' : 'var(--white-color)'
    };
    color: ${$isActive ? 'var(--white-color)' : 'var(--black-color)'};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
    `}
`;
