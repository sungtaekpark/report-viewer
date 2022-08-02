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
`;
