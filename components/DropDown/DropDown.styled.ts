import styled from "styled-components";

export const DropDownLayout = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  border-radius: 10px;
  background: var(--gray5-color);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 5px 10px;
  padding: 15px 15px;
  border-bottom: 1px solid var(--gray4-color);
  color: var(--gray1-color);

  > img {
    width: 30px;
    border-radius: 50%;
  }

  > p {
    grid-column: 2 / -1;
  }
`;

export const MenuList = styled.ul`
  padding: 8px 0;
  color: var(--gray2-color);
  font-weight: 600;

  > li {
    cursor: pointer;
    height: 100%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: var(--gray1-color);
    }

    > div {
      padding: 15px 10px;

      > span {
        margin: 0 10px;
      }
    }
  }
`;
