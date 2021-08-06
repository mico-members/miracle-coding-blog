import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset};

@font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    box-sizing: border-box;
}

body{
    font-family: 'Cafe24SsurroundAir';
    width: 100%;
}

#root{
    padding: 3rem 0; 
    max-width: 768px;
    margin: 0 auto;
}

a{
    color: inherit;
    text-decoration: none;
}

li{
    display: block;
    text-align: left;
}

ul{
    padding: 0;
    margin: 0;
}

input {
    outline: none;
}
`;

export default GlobalStyle;
