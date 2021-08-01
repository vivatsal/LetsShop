import React from "react";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, toggleCartHidden}) => {
    return (
    <div className='cart-dropdown'>
       <div className='cart-items'>
             { cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem}/>) }
       </div>    
       <div className="checkout">
            <Link to="/checkout"><button onClick = {toggleCartHidden} className="checkout-button">GO TO CHECKOUT</button></Link>
       </div>
    </div>
)}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);