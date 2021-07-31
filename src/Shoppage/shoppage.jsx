import React from "react";
import SHOP_DATA from "../Shop Data/Shopdata";
import "./shop.styles.css"

import ComponentPreview from "../Component/componentpreview/componentpreview"

class Shoppage extends React.Component{

    constructor(){
        super();
 
        this.state = {collections: SHOP_DATA}
    }
    
    render() {
 
       const {collections} = this.state;
 
      return(

        <div className="shoppage">

           <div>  <h1 className="collections">Collections</h1>  </div>
 
           <div className="collection-preview">
 
             { collections.map(({id, ...otherCollectionProps})=><ComponentPreview key={id} id={id} {...otherCollectionProps} />)}
 
           </div>

        </div>
 
      )
 
    }
 
 }

export default Shoppage;