import { CardStyled } from "./CardStyled";

export function Card({ data }) {
    return (
        <>
            <CardStyled>
                <div>
                    <strong>{data.title}</strong>
                    <span>x</span>
                </div>
                <textarea defaultValue={data.text}></textarea>
                <span>!</span>
            </CardStyled>
        </>
    );
};