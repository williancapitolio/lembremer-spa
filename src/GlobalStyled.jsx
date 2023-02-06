import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Roboto, Arial;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        background: #E4E7EF;
        -webkit-font-smoothing: antialiased;
    }
    #app {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 30px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    @media (max-width: 1000px) {
        #app {
            flex-direction: column;
            align-items: unset;
        }
    }
    main {
        flex: 1;
        margin-left: 350px;
    }
    @media (max-width: 1000px) {
        main {
            margin-left: 0;
            margin-top: 30px;
        }
    }
    main ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
    }
    @media (max-width: 650px) {
        main ul {
            grid-template-columns: 1fr;
        }
    }
`;