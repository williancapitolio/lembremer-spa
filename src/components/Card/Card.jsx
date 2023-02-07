import { CardStyled } from "./CardStyled";
import { AiOutlineDelete, AiOutlineExclamationCircle } from "react-icons/ai";

export function Card({ data }) {
    return (
        <>
            <CardStyled>
                <div>
                    <strong>{data.title}</strong>
                    <span><AiOutlineDelete size={20} /></span>
                </div>
                <textarea defaultValue={data.text}></textarea>
                <span><AiOutlineExclamationCircle size={20} /></span>
            </CardStyled>
        </>
    );
};