import styled from 'styled-components'

export const SharedPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OwnerSection = styled.ul`
  width: 100%;
  background-color: var(--gray5-color);
`

export const SearchSection = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const LinkSection = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

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
