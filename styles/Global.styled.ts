import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* ------- Reset css ------- */

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}


/* ----- HTML5 display-role reset for older browsers ------ */

article,aside,details,figcaption,
figure,footer,header,hgroup,menu,nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #000;
}


/* --------- color constants --------- */

:root {
  --primary-color: #6d6afe;
  --red-color: #ff5b56;
  --black-color: #111322;
  --white-color: #ffffff;
  --gray1-color: #3e3e43;
  --gray2-color: #9fa6b2;
  --gray3-color: #ccd5e3;
  --gray4-color: #e7effb;
  --gray5-color: #f0f6ff;
}
`;

export default GlobalStyle;
