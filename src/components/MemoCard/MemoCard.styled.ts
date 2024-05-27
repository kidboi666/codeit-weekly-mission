import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";

export const CardLayout = styled.li<{ $background: string }>`
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  padding: 15px 20px;
  background-color: ${({ $background }) => $background};
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

export const CreatedDate = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13px;
  color: #666;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 24px;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #666666;
`;
export const TimeStamp = styled.p`
  font-size: 14px;
  color: #666666;
`;

export const DropDownBox = styled.div`
  top: 0;
  right: 0;
`;
