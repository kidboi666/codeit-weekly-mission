import styled from 'styled-components'

export const AccountInfoLayout = styled.div`
  position: absolute;
  right: 0;
  width: 250px;
  border-radius: 10px;
  background-color: var(--gray5-color);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
`

export const InfoSection = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 15px;
  border-bottom: 1px solid var(--gray4-color);
  color: var(--gray1-color);

  > img {
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;
  }
`

export const MenuList = styled.ul`
  padding: 8px 0;
  color: var(--gray1-color);

  > li {
    cursor: pointer;
    height: 100%;

    &:hover {
      background-color: var(--gray4-color);
      color: var(--primary-color);
    }

    > div {
      padding: 15px 10px;

      > span {
        margin: 0 10px;
      }
    }
  }
`
