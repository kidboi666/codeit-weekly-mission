import styled from "styled-components";

export const FolderPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderSection = styled.div<{ ref?: any }>`
  width: 100%;
  background-color: var(--gray5-color);
  display: flex;
  justify-content: center;
  padding: 60px 0 90px 0;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const SearchSection = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SearchResultSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 32px;
  text-align: left;
  padding: 0 32.5px;

  > span:last-child {
    color: var(--gray2-color);
  }
`;

export const FolderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    display: block;
  }

  > div {
    @media (max-width: 767px) {
      padding: 0 32.5px;
    }
  }
`;

export const LinkSection = styled.ul<{ $noneLinks?: boolean }>`
  display: grid;
  min-width: ${({ $noneLinks }) => ($noneLinks ? "" : "325px")};
  grid-template-columns: ${({ $noneLinks }) => ($noneLinks ? "repeat(1, 1fr)" : "repeat(3, 340px)")};
  gap: 25px 20px;
  margin-bottom: 100px;

  @media (max-width: 1124px) {
    grid-template-columns: ${({ $noneLinks }) => ($noneLinks ? "repeat(1, 1fr)" : "repeat(2, 340px)")};
    gap: 25px 24px;
  }

  @media (max-width: 767px) {
    padding: 0 32.5px;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin-bottom: 60px;
  }
`;

export const FooterAddLink = styled.div<{ $animation: boolean }>`
  position: fixed;
  z-index: 40;
  bottom: 0;
  right: 0;
  left: 0;
  transform: translateY(93px);
  padding: 20px 0;
  background-color: var(--gray5-color);
  box-shadow: 0 10px 30px rgba(188, 188, 188, 0.3);
  transition: transform 1s;

  ${({ $animation }) =>
    $animation &&
    `
    transform: translateY(0);
  `};
`;
