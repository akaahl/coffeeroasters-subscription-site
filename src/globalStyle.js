import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    scroll-padding-top: 2rem;

    }

    a {
        text-decoration: none;
    }

    body {
        /* padding: 3vw 6.5vw 2.5vw 6.5vw; */
        font-family: 'Barlow', sans-serif;
        background: #fefcf7;
        min-height: 100vh;
        position: relative;
        overflow-x: hidden;


        &.modal-active {
            overflow: hidden;
        }

        @media (max-width: 768px) {
            padding-top: 5vw;
        }
        
    }

    .App {
        margin: 0 6.5vw 0 6.5vw;
        padding: 3vw 0 2.5vw 0;
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
        transition: all 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
            background: #66d2cf;
        }
    }

    h1 {
        color: #fefcf7;
        font-size: 3rem;
        font-weight: 800;
    }

    h2, h3, h4, h5 {
        font-family: 'Fraunces', sans-serif;
    }

    p {
        font-family: 'Barlow',sans-serif;
    }
`;

export default GlobalStyle;
