import { useState, useEffect } from "react";
import { api } from "./services/Api";
import { GlobalStyled } from "./GlobalStyled";
import { AsideStyled } from "./components/Aside/AsideStyled";
//import Aside from "./components/Aside/Aside";
import { Card } from "./components/Card/Card";
import { RadioButtons } from "./components/RadioButtons/RadioButtons";

export default function App() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    async function getAllNotes() {
        const response = await api.get("/notes",);
        setNotesList(response.data);
    };

    async function handleDelete(id) {
        const deletedNote = await api.delete(`/notes/${id}`);
        if (deletedNote) {
            setNotesList(notesList.filter(note => note._id !== id))
        }
    };

    async function handleChangePriority(id) {
        const changedPriorityNote = await api.patch(`/priorities/${id}`);
        if (changedPriorityNote) {
            getAllNotes();
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/notes", {
            title,
            text,
            priority: false
        });
        setTitle("");
        setText("");
        setNotesList([...notesList, response.data]);
    };

    useEffect(() => {
        function enableSubmitButton() {
            let btn = document.getElementById("SubmitButton");
            btn.style.background = "#FFD3CA";
            if (title && text) {
                btn.style.background = "#EB8F7A";
            }
        };
        enableSubmitButton();
    }, [title, text]);

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
                                maxLength={30}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="notes">Anotações</label>
                            <textarea
                                required
                                maxLength={150}
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                        </div>
                        <button id="SubmitButton" type="submit">Salvar</button>
                    </form>
                    <RadioButtons />
                </AsideStyled>
                <main>
                    <ul>
                        {notesList.map((data, index) => (
                            <Card
                                data={data}
                                key={index}
                                handleDelete={handleDelete}
                                handleChangePriority={handleChangePriority}
                            />
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
};
