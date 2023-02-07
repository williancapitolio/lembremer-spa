import { useState, useEffect } from "react";
import { api } from "./services/Api";
import { GlobalStyled } from "./GlobalStyled";
import { AsideStyled } from "./components/Aside/AsideStyled";
//import Aside from "./components/Aside/Aside";
import { Card } from "./components/Card/Card";

export default function App() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        async function getAllNotes() {
            const response = await api.get("/notes",);
            setNotesList(response.data);
        }
        getAllNotes();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/notes", {
            title,
            text,
            priority: false
        });
        setTitle("");
        setText("");
        //setNotesList([...notesList, response.data]);
    };

    return (
        <>
            <GlobalStyled />
            <div id="app">
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
                <main>
                    <ul>
                        {notesList.map((data, index) => (
                            <Card data={data} key={index} />
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
};
