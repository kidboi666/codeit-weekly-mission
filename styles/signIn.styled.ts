import styled, { css } from "styled-components";

export const SignInLayout = styled.div`
  background-color: var(--gray5-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  > p {
    color: var(--primary-color);
  }
`;

export const SignContainer = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
  }
`;
const signSectionStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 12px;
    font-size: 14px;
  }
`;

export const EmailContainer = styled.div`
  ${signSectionStyle}
`;

export const PasswordContainer = styled.div`
  ${signSectionStyle}

  > img {
    width: 20px;
    position: absolute;
    right: 15px;
    top: 43px;
    cursor: pointer;
    z-index: 10;
  }
`;

export const SocialContainer = styled.div`
  padding: 0 32px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    padding: 12px 24px;
    border: 1px solid var(--gray3-color);
    border-radius: 8px;
    background-color: var(--gray4-color);
    font-size: 1.4rem;
    color: #373740;

    > p {
      font-size: 14px;
    }

    > div {
      display: flex;
      gap: 16px;
    }
  }
`;
