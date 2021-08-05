import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset};

* {
    font-family: Noto Sans KR;
    box-sizing: border-box;
}

body{
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
