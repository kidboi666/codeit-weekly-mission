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
export const Dot = styled.p`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: var(--primary-color);
`
