import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    line-height: 1.15;
    box-sizing: border-box;
    font-family: 'NanumSquare', 'NotoSans', 'NotoSerif', san-serif, serif !important;
  }
  body {
    
  }
  #root {
    position: absolute;
    width: 100vw;
    height: 100vh; 
  }
  .ReactModal__Overlay--after-open{
    z-index: 3;
    /* border:none!important; */
  }
  .ReactModal__Content--after-open{
    border:none!important;
    border-radius:0px!important;
  }
`;
