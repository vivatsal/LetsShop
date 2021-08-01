import React from "react";
import "./checkout-component.styles.scss"

const CheckOutItem = ({item}) => {
   
  const {name, imageUrl, quantity, price} = item;
    
  return(

        <div className="component" >
           <img className="product-image" src={imageUrl} alt="checkout-item" />
           <span className="description">{name}</span>
           <span className="description">{quantity}</span>
           <span className="description">${price}</span>
        </div>
)}

export default CheckOutItem;