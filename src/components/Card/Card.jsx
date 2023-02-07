//import { CardStyled } from "./CardStyled";
//import { CardPriorityStyled } from "./CardPriorityStyled";
import { useState } from "react";
import "./CardStyled.css";
import "./CardPriorityStyled.css";
import { AiOutlineDelete, AiOutlineFlag } from "react-icons/ai";
import { api } from "../../services/Api";

export function Card({ data, handleDelete }) {
    const [changedNote, setChangedNote] = useState("");

    function handleEdit(e, priority) {
        e.style.cursor = "text";
        e.style.borderRadius = "5px";
        priority ? e.style.boxShadow = "0 0 5px #FFF" : e.style.boxShadow = "0 0 5px #C4C4C4";
    };

    async function handleSave(e, text) {
        e.style.cursor = "default";
        e.style.boxShadow = "none";
        if (changedNote && changedNote !== text) {
            await api.patch(`/notes/${data._id}`, {
                text: changedNote
            });
        }
    };

    return (
        <>
            <li className={data.priority ? "cardPriority" : "cardNormal"}>
                <div>
                    <strong>{data.title}</strong>
                    <span>
                        <AiOutlineDelete
                            size={20}
                            onClick={() => handleDelete(data._id)}
                        />
                    </span>
                </div>
                <textarea
                    defaultValue={data.text}
                    onClick={e => handleEdit(e.target, data.priority)}
                    onChange={e => setChangedNote(e.target.value)}
                    onBlur={e => handleSave(e.target, data.text)}
                />
                <span><AiOutlineFlag size={20} /></span>
            </li>
        </>
    );
};
