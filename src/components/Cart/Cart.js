import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "1",
          name: "Sushi",
          amount: 5,
          price: 10,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}

export default Cart;
