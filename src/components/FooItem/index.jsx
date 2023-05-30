import { ArrowUpCircle, ArrowDownCircle, Trash2 } from "lucide-react";
import { Td, Tr } from "./styles";

const FooItem = ({ item, onDelete }) => {
    return (
        <Tr>
            <Td>{item.desc}</Td>
            <Td>{item.value}</Td>
            <Td alignCenter>
                {item.expense ? (
                    <ArrowDownCircle color="red" />
                ) : (
                    <ArrowUpCircle color="green" />
                )}
            </Td>
            <Td alignCenter>
                <Trash2 onClick={() => onDelete(item.id)} />
            </Td>
        </Tr>
    );
};

export default FooItem;
