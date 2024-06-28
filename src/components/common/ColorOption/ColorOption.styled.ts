import styled from 'styled-components'

export const ColorOptionLayout = styled.div<{
  $isActive: boolean
  $background: string
}>`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  > div {
    display: ${({ $isActive }) => ($isActive ? 'flex' : 'none')};
    z-index: 100;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${({ $background }) => {
    if ($background.includes('http')) {
      return `
      background-image: url(${$background});
      background-size: cover;

      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      `
    }
    return `
    background-color:${$background};
    border: 1px solid rgba(0, 0, 0, 0.08);
    `
  }}

  @media (max-width: 768px) {
    width: 100%;
  }
`
