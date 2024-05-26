import styled from "styled-components";

export const AddLinkLayout = styled.div<{ $disabled?: boolean }>`
  padding: 0 32.5px;
`;

export const InnerBox = styled.div`
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FormBox = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const IconImgBox = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-10.25px);
  z-index: 10;
`;
