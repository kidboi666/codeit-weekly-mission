import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  gap: 12px;
  color: var(--gray2-color);
  font-size: 14px;

  @media (max-width: 767px) {
    align-self: flex-end;
  }
`
