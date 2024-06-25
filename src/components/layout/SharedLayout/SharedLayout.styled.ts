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

export const SearchResultSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 32px;
  text-align: left;
  padding: 0 32.5px;

  > span:last-child {
    color: var(--gray2-color);
  }
`

export const LinkSection = styled.ul`
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

    > div {
      padding: 0 32.5px;
    }
  }
`
