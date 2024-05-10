import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 32px 40px;
  width: 360px;
  border-radius: 15px;
  border: 1px solid var(--gray3-color);
  background-color: var(--white-color);
  z-index: 60;

  > h3 {
    position: relative;
    font-size: 20px;
    font-weight: 700;
    color: var(--gray1-color);
    margin-bottom: 24px;
  }

  > h4 {
    margin-bottom: 24px;
    font-size: 14px;
    color: var(--gray2-color);
  }

  & input {
    margin-bottom: 15px;
  }
`;

export const StyledCloseButton = styled(CloseButton)`
  top: 16px;
  right: 16px;
`;
