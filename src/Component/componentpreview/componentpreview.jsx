import React from "react";
import  ComponentList  from "../componentlist/componentlist"
import "./componentpreview.styles.css"

const ComponentPreview = ({title, items}) => (

  <div className="component-preview">
     <div className="title"><h2>{title}</h2></div> 
     <div className="preview">{items.filter((item,idx)=>idx<4).map((item)=><ComponentList key={item.id} id={item.id} item={item}/>)}
     </div>
  </div>
)

export default ComponentPreview;