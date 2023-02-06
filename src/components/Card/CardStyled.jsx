import styled from "styled-components";

export const CardStyled = styled.li`
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px 20px 10px 20px;

    div {
        display: flex;
        justify-content: space-between;
    }

    div strong {
        display: block;
        font-size: 16px;
        color: #333;
    }

    div span {
        color: #FFEAE6;
        cursor: pointer;
    }

    div span:hover {
        color: #EB8F7A;
        transition: 0.2s;
    }

    textarea {
        padding: 7px;
        margin-top: 7px;
        margin-bottom: 5px;
        width: 100%;
        height: 130px;
        font-size: 14px;
        color: #666;
        border: 0;
        background: #FFF;
        resize: none;
    }

    span {
        color: #C4C4C4;
        cursor: pointer;
    }

    span:hover {
        color: #EB8F7A;
        transition: 0.2s;
    }
`;