import React from 'react';
import { Component } from 'react';
import {Menulist} from './menuList.directory.jsx';
import './directory.styles.css'

class Directory extends Component{

    constructor(){
        super();

        this.state = { sections : [{title : 'HATS', subtitle : 'SHOP NOW', imageUrl : 'https://i.ibb.co/cvpntL1/hats.png', id: '1'}, {title : 'JACKETS', subtitle : 'SHOP NOW', imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png' ,id:'2'},
    
        {title : 'SNEAKERS', subtitle : 'SHOP NOW', imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png', id: '3'}, {title : 'WOMENS', subtitle : 'SHOP NOW', imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png', id:'4', size:"large"},

        {title : 'MENS', subtitle : 'SHOP NOW', imageUrl : 'https://i.ibb.co/R70vBrQ/men.png', id:'5', size: 'large'}
    
    ]}
    }
    
    render(){

        return(

          <div className="direct">
            
            {
            this.state.sections.map(section=>(<Menulist key={section.id} size={section.size} title={section.title} subtitle={section.subtitle} imageUrl={section.imageUrl} id={section.id}/>))
            }
            
          </div>
 
            
        )

    }

}

export default Directory;