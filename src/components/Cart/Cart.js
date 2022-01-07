import React from 'react'
import classes from "./Cart.module.css";

function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}>{[
        {id: '1',
        name: 'Sushi',
        amount: 5,
        price: 10}
 ].map((item)=><li>{item.name}</li>)}</ul>;

    return (
        <div className={}>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>50</span>
            </div>
            <div className={classes.action}>
<button className={classes['button--alt']}>close</button>
<button className={classes.button}>order</button>
            </div>
        </div>
    )
}

export default Cart
