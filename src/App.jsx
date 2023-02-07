import { useState, useEffect } from "react";
import { api } from "./services/Api";
import { GlobalStyled } from "./GlobalStyled";
//import { Aside } from "./components/Aside/Aside";
import { AsideStyled } from "./components/Aside/AsideStyled";
import { Card } from "./components/Card/Card";
import { RadioButtons } from "./components/RadioButtons/RadioButtons";

export default function App() {
    const [selectedValue, setSelectedValue] = useState("all");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    async function loadNotes(option) {
        const params = { priority: option };
        const response = await api.get("/priorities", {
            params
        });
        if (response) {
            setNotesList(response.data)
        }
    };

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        if (e.target.checked && e.target.value !== "all") {
            loadNotes(e.target.value);
        } else {
            getAllNotes();
        }
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

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
        if (changedPriorityNote && selectedValue !== "all") {
            loadNotes(selectedValue);
        } else if (changedPriorityNote) {
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
        if (selectedValue !== "all") {
            getAllNotes();
        } else {
            setNotesList([...notesList, response.data]);
        }
        setSelectedValue("all");
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
                    <RadioButtons
                        controlProps={controlProps}
                    />
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
