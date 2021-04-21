import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      --primary-color: #EEF0F2;
      --secondary-color: #111820;
      --outline-color: #67a2a2;
      --primary-bg-color: #022B3A;
      --secondary-bg-color: #eef0f2;
      --primary-bg-color: #022B3A;
      --accent-bg-color: #D7ECEF;
      --page-horizontal-padding: 20px;
      --page-vertical-padding: 50px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --heading-font-family: 'EB Garamond', serif;
      --user-img-width: 120px;
      --user-img-margin: 5px;
      --nav-width: 250px;
      --page-height: 100vh;
    }
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        font-family: 'Rubik', sans-serif;
    }

    html, body {
        max-width: 100vw;
        background-color: #022B3A;

    }
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
/* 
        vertical-align: baseline;
        box-sizing: border-box; */
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
      
      font-family: var(--heading-font-family);
    }
    h1{
        font-size: 40px;
        color: var(--primary-color);
    }
    h2{
        font-size: 25px;
        color: #A3A3A3;
    }
    h3{
        font-size: larger;
    
    }
    h4{
        font-size: large;
    }
`;
