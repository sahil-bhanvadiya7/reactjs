import React from 'react'
import CartContext from './cart-context'
function CartProvider(props) {

    const addItemToCartHadler= item => {
        
    }
    const removeItemFromCartHadler= id => {
        
    }

const cartContext = {
    items : [],
    totalAmount: 0,
    addItem: addItemToCartHadler,
    removeItem: removeItemFromCartHadler
}

    return (
       <CartContext.Provider value={cartContext}>
           {props.children}
       </CartContext.Provider>
    )
}

export default CartProvider
