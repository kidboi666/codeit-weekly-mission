import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  gap: 12px;
  color: var(--gray2-color);
  font-size: 14px;
`;

export const OptionIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const SelectedFolder = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const FolderOptionButtonLayout = styled.div`
  margin-bottom: 24px;
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: 700px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
