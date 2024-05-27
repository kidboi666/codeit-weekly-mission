import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";

export const CardLayout = styled.li<{
  $background: string;
}>`
  max-width: 40%;
  min-width: 15%;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  padding: 15px 20px;
  background-color: ${({ $background }) => $background};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.025);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CloseButtonStyled = styled(CloseButton)`
  position: absolute;
  top: 15px;
  right: 20px;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 24px;
  color: #fff;
`;

export const Content = styled.p<{ $showContent: boolean }>`
  display: ${({ $showContent }) => ($showContent ? "block" : "-webkit-box")};
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  color: #fff;
`;
export const TimeStamp = styled.p`
  font-size: 14px;
  color: #fff;
`;

export const DropDownBox = styled.div`
  top: 0;
  right: 0;
`;
