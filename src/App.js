import "./App.css";
import { useState } from "react";
import NewExpense from "./compoent/NewExpense/NewExpense";
import Expenses from "./compoent/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "hello",
    amount: 190,
    date: new Date(2022, 0, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses=>{
      return [expense, ...prevExpenses];
    }));
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
