import styled from 'styled-components'
import CloseButton from '@/src/components/common/CloseButton/CloseButton'
import { slideDown } from '@/src/styles/animation'

export const PaperLayout = styled.li<{
  $background: string
}>`
  min-width: 58px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  padding: 15px 20px;
  background-color: ${({ $background }) => $background};
  transition: all 0.3s;
  animation: ${slideDown} 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`

export const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CloseButtonStyled = styled(CloseButton)`
  position: absolute;
  top: 15px;
  right: 20px;
`

export const Title = styled.p<{ $showContent: boolean }>`
  display: ${({ $showContent }) => ($showContent ? 'block' : '-webkit-box')};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-right: 38px;
  line-height: 24px;
  color: #fff;
`

export const Content = styled.p<{ $showContent: boolean }>`
  display: ${({ $showContent }) => ($showContent ? 'block' : '-webkit-box')};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
`
export const TimeStamp = styled.p`
  font-size: 14px;
  color: #fff;
`
