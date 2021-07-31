import React from "react";
import "./componentlist.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions"

const ComponentList = ({item, addItem}) => {
      
  const {name, price, imageUrl} = item; 
      
  return (

   <div className="component-list">
       
       <div className="images">
          <div className="photos" style={{backgroundImage:`url(${imageUrl})`}}/>
       </div>
         
       <div className="list">
             <div className="name"><h2>{name}</h2></div>
             <div className="price"><h2 className="prices">${price}</h2></div>
       </div>

       <div>
             <button className="buttonadd" onClick={() => addItem(item)}>ADD TO CART</button>
       </div>

   </div>

)}


const mapDispatchToProps = dispatch => ({
      addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(ComponentList);