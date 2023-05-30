import { useEffect } from "react";
import FooItem from "../FooItem";
import { Tr, Table, Thead, Tbody, Th } from "./styles";

const Footer = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th width={40}>Descrição</Th>
                    <Th width={40}>Valor</Th>
                    <Th width={10} alignCenter>
                        Tipo
                    </Th>
                    <Th width={10}></Th>
                </Tr>
            </Thead>
            <Tbody>
                {itens?.map((item, index) => (
                    <FooItem key={index} item={item} onDelete={onDelete} />
                ))}
            </Tbody>
        </Table>
    );
};

export default Footer;
