import React from "react";
// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpansionItem(props) {
    // const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("updated")
    // }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>click</button> */}
    </Card>
    </li>
  );
}

export default ExpansionItem;
