import styled from 'styled-components'

export const ShareContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  div {
    display: grid;
    grid-template-rows: 42px 15px;
    gap: 10px;
    place-items: center;
    cursor: pointer;

    p {
      font-size: 13px;
      line-height: 15px;
    }
  }
`

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
`
