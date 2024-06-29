import styled, { css } from 'styled-components'

const sectionStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

export const FolderPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderSection = styled.div<{ ref?: any }>`
  width: 100%;
  background-color: var(--gray5-color);
  display: flex;
  justify-content: center;
  padding: 60px 0 90px 0;

  @media (max-width: 767px) {
    display: block;
  }

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 0 60px 0;
  }
`

export const FooterAddLink = styled.div<{ $animation: boolean }>`
  position: fixed;
  z-index: 40;
  bottom: 0;
  right: 0;
  left: 0;
  transform: translateY(109px);
  padding: 20px 0;
  background-color: var(--gray5-color);
  box-shadow: 0 10px 30px rgba(188, 188, 188, 0.3);
  transition: transform 1s;

  ${({ $animation }) =>
    $animation &&
    `
    transform: translateY(0);
  `};
`

export const SearchSection = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const FolderSection = styled.div`
  ${sectionStyle}

  @media (max-width: 767px) {
    display: block;
  }

  > div {
    @media (max-width: 767px) {
      padding: 0 32.5px;
    }
  }
`

export const FolderOptionSection = styled.div`
  ${sectionStyle}
  margin-bottom: 20px;

  @media (max-width: 768px) {
    > div {
      padding: 0 32.5px;
    }
  }
`

export const LinkSection = styled.ul`
  ${sectionStyle}

  > div {
    display: grid;
    min-width: 325px;
    grid-template-columns: repeat(3, 340px);
    gap: 25px 20px;
    margin-bottom: 100px;

    @media (max-width: 1124px) {
      grid-template-columns: repeat(2, 340px);
      gap: 25px 24px;
    }

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 60px;
      padding: 0 32.5px;
    }
  }
`

export const PaperSection = styled.ul`
  ${sectionStyle}

  > div {
    width: 1060px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (max-width: 1124px) {
      width: 700px;
    }

    @media (max-width: 767px) {
      width: 100%;
      justify-content: flex-start;
      padding: 0 32.5px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export const PaperPageSection = styled.div`
  margin-bottom: 100px;
`
