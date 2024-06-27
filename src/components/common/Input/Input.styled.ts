import styled from 'styled-components'

export const Input = styled.input<{
  $variant?: string
  width?: string
  $disabled?: boolean
}>`
  ${({ width }) => `width: ${width}`};
  position: relative;
  padding: 15px 15px 15px 15px;
  box-sizing: border-box;
  border: 1px solid var(--gray2-color);
  border-radius: 10px;
  outline: none;
  background-color: var(--white-color);
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 5px 5px 1px #d2d1ff;
    border: 1px solid var(--primary-color);
  }

  ${({ $variant }) =>
    $variant === 'search' &&
    `
      width: 1060px;
      padding: 15px 15px 15px 45px;
      box-sizing: border-box;
      border: none;
      background-color: #f5f5f5;
      border-radius: 10px;

      &:focus {
        border: none;
      }

      @media (max-width: 1124px) {
        width: 700px;
      }
      
      @media (max-width: 767px) {
        width: 100%;
      }
    `}

  ${({ $variant }) =>
    $variant === 'addLink' &&
    `
      background-color: var(--white-color);
      width: 800px;
      height: 69px;
      padding: 16px 20px 16px 45px;
      border:  1px solid var(--primary-color);
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
`
