import React from "react";
import CartItem from "../components/cart-items";

const Cart = (props) =>{
    
    const {cart, deleteCard} = props
    return(
        <div className="d-flex flex-wrap gap-4 justify-content-around mt-4">
            {
                cart.map((product, i) => {
                    return <CartItem key={i} onClick={()=>deleteCard(i)} {...product} children="Delete"/>
                })
            }
        </div>
    )
}
export default Cart;