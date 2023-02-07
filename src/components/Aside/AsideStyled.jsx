import styled from "styled-components";

export const AsideStyled = styled.aside`
    width: 320px;
    margin-bottom: 30px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 30px 20px;
    position: fixed;

    @media (max-width: 1000px) {
        position: relative;
        width: 100%;
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
`;