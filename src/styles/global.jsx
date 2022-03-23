import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  abbr, address, article, aside, audio, b, blockquote, body, 
  canvas, caption, cite, code, dd, del, details, dfn, div, 
  dl, dt, em, fieldset, figcaption, figure, footer, form, 
  h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, 
  img, ins, kbd, label, legend, li, mark, menu, nav, object, 
  ol, p, pre, q, samp, section, small, span, strong, sub, summary, 
  sup, table, tbody, td, tfoot, th, thead, time, tr, ul, var, video{
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  html {
    display: block;
}

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 12px;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: -1px;
    vertical-align: baseline;
  }
  a{
    text-decoration: none;
    color: inherit;
    }
  
  button{
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  input {
    border: none;
  }
  input::placeholder{
    color: #B6B3B3;
  }
`;

export default GlobalStyle;
