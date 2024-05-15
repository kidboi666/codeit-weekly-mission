import styled from "styled-components";

export const SharedPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderBox = styled.div`
  width: 100%;
  background-color: var(--gray5-color);
`;

export const OwnerLayoutList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0 60px 0;
`;

export const OwnerImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const OwnerName = styled.p`
  margin-top: 12px;
`;

export const Star = styled.p`
  margin-top: 20px;
  font-size: 40px;
`;

export const FolderBox = styled.ul`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 25px 20px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 340px);
    gap: 25px 24px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
    padding: 0 32.5px;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const SearchSection = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const LinkSection = styled.ul<{ $noneLinks?: boolean }>`
  display: grid;
  min-width: ${({ $noneLinks }) => ($noneLinks ? "" : "325px")};
  grid-template-columns: ${({ $noneLinks }) =>
    $noneLinks ? "repeat(1, 1fr)" : "repeat(3, 340px)"};
  gap: 25px 20px;
  margin-bottom: 100px;

  @media (max-width: 1124px) {
    grid-template-columns: ${({ $noneLinks }) =>
      $noneLinks ? "repeat(1, 1fr)" : "repeat(2, 340px)"};
    gap: 25px 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;

    > div {
      padding: 0 32.5px;
    }
  }
`;
