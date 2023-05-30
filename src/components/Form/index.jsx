import { useState } from "react";
import {
    Button,
    Cashier,
    Input,
    InputAll,
    InputBox,
    Label,
    RadioGrup,
} from "./styles";

const Form = ({ handAdd }) => {
    const [desc, setDesc] = useState("");
    const [value, setValue] = useState("");
    const [expense, setExpense] = useState(false);

    const gerarId = () => Math.round(Math.random() * 1000);

    const leSalve = () => {
        if (!desc || !value) {
            alert("Por favor, forneça a descrição e o valor desejado.");
            return;
        } else if (value < 1) {
            alert("O valor deve ser positivo.");
            return;
        }

        const transition = {
            id: gerarId(),
            desc: desc,
            value: value,
            expense: expense,
        };

        handAdd(transition);
        setDesc("");
        setValue("");
    };

    return (
        <>
            <Cashier>
                <InputBox>
                    <Label>Descrição</Label>
                    <Input
                        placeholder="Ex:Salão"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <Label>Valor</Label>
                    <InputAll
                        placeholder="Ex:25"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </InputBox>

                <RadioGrup>
                    <Input
                        type="radio"
                        id="rExpress"
                        defaultChecked
                        name="grup1"
                        onChange={() => setExpense(!expense)}
                    />
                    <Label htmlFor="rExpress">Entrada</Label>

                    <Input
                        type="radio"
                        id="rIncome"
                        name="grup1"
                        onChange={() => setExpense(!expense)}
                    />
                    <Label htmlFor="rIncome">Saída</Label>
                </RadioGrup>
                <Button onClick={leSalve}>Adicionar </Button>
            </Cashier>
        </>
    );
};

export default Form;
