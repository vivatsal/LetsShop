import React from "react";
import SHOP_DATA from "../../../Shop Data/Shopdata";
import ComponentList from "../../componentlist/componentlist";

class hatspage extends React.Component {
   
    constructor(){
        super();

        this.state = {Collection: SHOP_DATA}
    }

    render(){

        const {Collection} = this.state;
       
     return(
       
        <div className="page">
           {Collection.map(({id, ...otherItemProps})=><ComponentList id={id} {...otherItemProps} />)}
        </div>

     )

    }

}

export default hatspage;