import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 3vw 6.5vw 2.5vw 6.5vw;
        font-family: 'Barlow', sans-serif;
        background: #fefcf7;
        min-height: 100vh;

        @media (max-width: 768px) {
            padding-top: 5vw;
        }
        
    }

    button {
        display:block;
        font-family: 'Fraunces', san-serif;
        border-radius: 10px;
        padding: 1rem 2rem;
        background: #0e8784;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        color: #fefcf7;
        cursor: pointer;
        transition: background 0.3s ease-in-out;

        &:hover {
            background: #66d2cf;
        }
    }

    h1 {
        color: #fefcf7;
        font-size: 3rem;
        font-weight: 800;
    }

    h2, h3, h4 {
        font-family: 'Fraunces', sans-serif;
    }

    p {
        font-family: 'Barlow',sans-serif;
    }
`;

export default GlobalStyle;
