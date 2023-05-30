import { Box } from "./styles";
import Item from "../Item/index";
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from "lucide-react";

const Resume = ({ prohibited, exit, total }) => {
    return (
        <Box>
            <Item title="Entradas" Icon={ArrowUpCircle} value={prohibited} />
            <Item title="Saídas" Icon={ArrowDownCircle} value={exit} />
            <Item title="Completo" Icon={DollarSign} value={total} />
        </Box>
    );
};

export default Resume;
