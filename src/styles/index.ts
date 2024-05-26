import { createGlobalStyle } from "styled-components";
import GlobalColor from "./color.styled";
import GlobalReset from "./reset.styled";

const GlobalStyle = createGlobalStyle`
  ${GlobalColor};
  ${GlobalReset};
`;

export default GlobalStyle;
