import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({cartItems}) => {
    return (
    <div className='cart-dropdown'>
       <div className='cart-items'>
             { cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem}/>) }
       </div>    
       <div className="checkout">
            <button className="checkout-button">GO TO CHECKOUT</button>
       </div>
    </div>
)}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown);