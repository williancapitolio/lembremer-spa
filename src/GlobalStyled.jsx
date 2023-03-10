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
    aside{
        width: 320px;
        margin-bottom: 30px;
        background: #FFF;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 30px 20px;
        position: fixed;
    }
    strong {
        font-size: 20px;
        text-align: center;
        display: block;
        color: #333;
    }
    form {
        margin-top: 30px;
    }
    form .input-block {
        margin-top: 20px;
    }
    form .input-block label {
        color: #ACACAC;
        font-size: 14px;
        font-weight: bold;
        display: block;
    }
    form .input-block input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #EEE;
    }
    form .input-block textarea {
        margin-top: 7px;
        width: 100%;
        height: 150px;
        //height: 200px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #EEE;
        background: #FFF;
        resize: none;
    }
    form button[type=submit] {
        width: 100%;
        border: 0;
        margin-top: 30px;
        background: #FFD3CA;
        border-radius: 10px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        cursor: pointer;
    }
    @media (max-width: 1000px) {
        #app {
            flex-direction: column;
            align-items: unset;
        }
        aside {
            position: relative;
            width: 100%;
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