import { useState } from "react";
import Radio from "@mui/material/Radio";
import { RadioStyled } from "./RadioButtonsStyled";

export function RadioButtons() {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

    return (
        <>
            <RadioStyled>
                <div>
                    <Radio
                        {...controlProps("todos")}
                        sx={{
                            color: "#FFD3CA",
                            "&.Mui-checked": {
                                color: "#EB8F7A",
                            },
                        }}
                    />
                    <span>Todos</span>
                </div>
                <div>
                    <Radio
                        {...controlProps("prioridade")}
                        sx={{
                            color: "#FFD3CA",
                            "&.Mui-checked": {
                                color: "#EB8F7A",
                            },
                        }}
                    />
                    <span>Prioridade</span>
                </div>
                <div>
                    <Radio
                        {...controlProps("normal")}
                        sx={{
                            color: "#FFD3CA",
                            "&.Mui-checked": {
                                color: "#EB8F7A",
                            },
                        }}
                    />
                    <span>Normal</span>
                </div>
            </RadioStyled>
        </>
    );
};