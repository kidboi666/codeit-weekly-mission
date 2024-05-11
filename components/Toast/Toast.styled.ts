import styled from "styled-components";

export const ToastLayout = styled.div<{ $isAnimation: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-148.22px, 0);
  display: flex;
  padding: 19px 30px;
  gap: 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 60;
  opacity: 0;
  transition: all 0.3s;

  ${({ $isAnimation }) =>
    $isAnimation &&
    `
    opacity: 1;
    transform: translate(-148.22px, -45px);
  `}
`;

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckTextBox = styled.p`
  color: var(--white-color, #fff);
`;

export const CloseIconButtonBox = styled.button`
  width: 30px;
  height: 24px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
