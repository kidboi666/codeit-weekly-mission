import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* ------- Reset css ------- */

html,body,div,span,applet,object,iframe,h1,
h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,
address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,
samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,
dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,
caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,
details,embed,figure,figcaption,footer,header,hgroup,
menu,nav,output,ruby,section,summary,time,mark,audio,
video {
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
