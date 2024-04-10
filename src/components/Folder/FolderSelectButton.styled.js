import styled from 'styled-components';

const FolderSelectButton = styled.button`
  line-height: 0;
  height: 35px;
  padding: 8px 12px;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--primary-color)' : 'var(--white-color)'};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--white-color)' : 'var(--black-color)'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

export default FolderSelectButton;
