//import { CardStyled } from "./CardStyled";
//import { CardPriorityStyled } from "./CardPriorityStyled";
import "./CardStyled.css";
import "./CardPriorityStyled.css";
import { AiOutlineDelete, AiOutlineFlag } from "react-icons/ai";

export function Card({ data }) {
    return (
        <>
            <li className={data.priority ? "cardPriority" : "cardNormal"}>
                <div>
                    <strong>{data.title}</strong>
                    <span><AiOutlineDelete size={20} /></span>
                </div>
                <textarea defaultValue={data.text}></textarea>
                <span><AiOutlineFlag size={20} /></span>
            </li>
        </>
    );
};
