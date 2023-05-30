import { Cashier, Header, Title, Valor } from "./styles";

function Item({ title, Icon, value }) {
    return (
        <Cashier>
            <Header>
                <Title>{title}</Title>
                <Icon />
            </Header>
            <Valor>{value}</Valor>
        </Cashier>
    );
}

export default Item;
