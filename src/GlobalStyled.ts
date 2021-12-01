import {createGlobalStyle} from "styled-components"
import LabGrotesqueNormalWoff from './assets/fonts/LabGrotesque-Regular.woff';
import LabGrotesqueNormalWoff2 from './assets/fonts/LabGrotesque-Regular.woff2';
import LabGrotesqueMediumWoff from './assets/fonts/LabGrotesque-Medium.woff';
import LabGrotesqueMediumWoff2 from './assets/fonts/LabGrotesque-Medium.woff2';


export const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
}

@font-face {
  font-family: 'Lab Grotesque';
  src: local('LabGrotesque-Regular'), local('LabGrotesque-Regular'),
  url(${LabGrotesqueNormalWoff}) format('woff'),
      url(${LabGrotesqueNormalWoff2}) format('woff2'),
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lab Grotesque';
  src: local('LabGrotesque-Medium'), local('LabGrotesque-Medium'),
      url(${LabGrotesqueMediumWoff2}) format('woff2'),
      url(${LabGrotesqueMediumWoff}) format('woff'),
  font-weight: 500;
  font-style: normal;
}


#root {
  margin: 0;
  padding: 0;
  font-family: 'Lab Grotesque', sans-serif !important;
  // background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  min-height: 100vh;
}
`