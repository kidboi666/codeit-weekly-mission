import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  padding: 19px 30px;
  gap: 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
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
`;
