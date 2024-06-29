import styled from 'styled-components'

export const CloseButton = styled.div<{ $variant: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${({ $variant }) => {
    if ($variant === 'searchInput' || $variant === 'modal') {
      return `
        background-color: #ccd5e3;
         
        &:hover {
           background-color: #e7effb;
        }
     `
    }
    return ``
  }}

  ${({ $variant }) =>
    $variant === 'outlined' &&
    `
    transition: transform 0.3s;
    &:hover {
      transform: rotate(90deg);
    }
  `}
`
