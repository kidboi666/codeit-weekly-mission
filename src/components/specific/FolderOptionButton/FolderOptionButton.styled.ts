import styled from 'styled-components'

export const FolderOptionButtonLayout = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`

export const SelectedFolder = styled.h1`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 400;
`

export const OptionContainer = styled.div`
  display: flex;
  gap: 12px;
  color: var(--gray2-color);
  font-size: 14px;

  @media (max-width: 767px) {
    align-self: flex-end;
  }
`

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 8px;
  transition:
    color 0.3s,
    background 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }

  > img {
    width: 18px;
  }
`
