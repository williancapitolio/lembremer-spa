import { useState } from "react";
import { api } from "../../services/Api";
import { AsideStyled } from "./AsideStyled";

export function Aside() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/notes", {
            title,
            text
        });
        setTitle("");
        setText("");
    }

    return (
        <>
            <AsideStyled>
                <strong>Caderno de Notas</strong>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="title">Título da Anotação</label>
                        <input
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="notes">Anotações</label>
                        <textarea
                            required
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </AsideStyled>
        </>
    )
};