import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 1.5rem 5rem 2.5rem 5rem;
        font-family: 'Barlow', sans-serif;
        
    }
`;

export default GlobalStyle;
