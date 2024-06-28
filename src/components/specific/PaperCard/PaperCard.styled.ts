import styled from 'styled-components'
import CloseButton from '@/src/components/common/CloseButton/CloseButton'
import { slideDown } from '@/src/styles/animation'

export const PaperLayout = styled.li<{
  $background: string
}>`
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 15px 20px;
  background-color: ${({ $background }) => $background};
  transition: all 0.3s;
  animation: ${slideDown} 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
  }
`

export const PaperContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  z-index: 10;
`

export const CloseButtonSection = styled.div`
  position: absolute;
  right: 16px;
  top: 2px;
  background-color: var(--white-color);
  border-radius: 15px;
`

export const Writer = styled.div<{ $color: string }>`
  padding: 10px;
  margin-right: 30px;
  border-radius: 10px;
  font-weight: 700;
  line-height: 12px;
  color: ${({ $color }) => $color};
  background-color: var(--white-color);

  > p {
    display: inline;
  }
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
export const TimeStamp = styled.p<{ $hoverContent: boolean; $color: string }>`
  position: absolute;
  right: 5px;
  transform: translateY(-3px);
  font-size: 14px;
  font-weight: 700;
  color: ${({ $color }) => $color};
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;

  ${({ $hoverContent }) =>
    $hoverContent &&
    `
    transform: translateY(18px);
  `}
`
