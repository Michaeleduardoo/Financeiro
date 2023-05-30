import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resumo";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const data = localStorage.getItem("transactions");

  const [actions, setActions] = useState(data ? JSON.parse(data) : []);
  const [prohibited, setProhibited] = useState(0);
  const [exit, setExit] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const valueExpense = actions
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.value));

    const valueIncome = actions
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.value));

    const expense = valueExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const prohibited = valueIncome
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(prohibited - expense).toFixed(2);

    setProhibited(`R$ ${prohibited}`);
    setExit(`R$ ${expense}`);
    setTotal(`${Number(prohibited) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [actions]);

  const add = (actionss) => {
    const newArray = [...actions, actionss];
    setActions(newArray);

    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <>
      <Header />
      <Resume prohibited={prohibited} exit={exit} total={total} />
      <Form handAdd={add} actions={actions} setActions={setActions} />
      <Footer itens={actions} setItens={setActions} />
    </>
  );
}

export default App;
