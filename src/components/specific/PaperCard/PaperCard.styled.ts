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
  user-select: none;
  transition: all 0.3s;
  animation: ${slideDown} 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
  }
`

export const PaperContainer = styled.div`
  position: relative;
  display: block;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  z-index: 10;
`

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const CloseButtonSection = styled.div<{ $color: string; $hoverContent: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -30px;
  bottom: -25px;
  background-color: ${({ $color }) => $color};
  border-radius: 15px;
  width: 25px;
  height: 25px;
`

export const Writer = styled.div<{ $color: string; $showContent: boolean }>`
  display: ${({ $showContent }) => ($showContent ? 'block' : '-webkit-box')};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  line-height: 10px;
  color: ${({ $color }) => $color};
  background-color: var(--white-color);
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
  font-size: 12px;
  color: #fff;
`
export const TimeStamp = styled.p<{ $hoverContent: boolean; $color: string }>`
  position: absolute;
  right: 15px;
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
