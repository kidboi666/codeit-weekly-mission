import styled from 'styled-components';

const SortingButton = styled.button`
  line-height: 0;
  height: 35px;
  padding: 8px 12px;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  background-color: var(--white-color);
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`;

export default SortingButton;
