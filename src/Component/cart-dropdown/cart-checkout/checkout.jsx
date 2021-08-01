import React from "react";
import { connect } from "react-redux";
import CheckOutItem from "../checkout-component/checkout-component";
import "./checkout.styles.css";

const checkOut = ({cartItems}) => {
    
    return(
    <div className="cart-checkout">
        <div className="cart-items" >
            <div className="cart-heading">
                <div className="heading">Product</div>
                <div className="heading">Description</div>
                <div className="heading">Quantity</div>
                <div className="heading">Price</div>    
            </div>
            <div className="cart-details">
                 {cartItems.map(cartitem => <CheckOutItem key={cartitem.id} item={cartitem}/>) }
            </div>
        </div>
    </div>
)}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(checkOut);