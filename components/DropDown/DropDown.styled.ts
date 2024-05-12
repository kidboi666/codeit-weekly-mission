import styled from "styled-components";

export const DropDownLayout = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  border-radius: 10px;
  background: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 5px 10px;
  padding: 15px 15px;
  border-bottom: 1px solid var(--gray4-color);
  color: var(--white-color);

  > img {
    width: 30px;
    border-radius: 50%;
  }

  > p {
    grid-column: 2 / -1;
  }
`;

export const MenuList = styled.ul`
  color: var(--white-color);
  padding: 8px 0;

  > li {
    cursor: pointer;
    height: 100%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    > div {
      padding: 15px 10px;

      > span {
        margin: 0 10px;
      }
    }
  }
`;
