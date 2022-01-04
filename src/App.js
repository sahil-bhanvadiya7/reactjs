import "./App.css";
import NewExpense from "./compoent/NewExpense/NewExpense";
import Expenses from "./compoent/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "a1",
      title: "hello",
      amount: 190,
      date: new Date(2022, 0, 1),
    },
    {
      id: "a2",
      title: "hello2",
      amount: 200,
      date: new Date(2022, 1, 22),
    },
    {
      id: "a3",
      title: "hello3",
      amount: 100,
      date: new Date(2022, 8, 12),
    },
    {
      id: "a4",
      title: "hello4",
      amount: 90,
      date: new Date(2022, 5, 22),
    },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
     
    </div>
  );
}

export default App;
