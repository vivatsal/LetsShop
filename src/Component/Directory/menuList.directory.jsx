import React from 'react';
import './menuList.styles.css'

export const Menulist  = ({title, subtitle, size, imageUrl}) => (

<div className={`${size ? ('large') : ''} menu-list`} >
  <div 
     className="background-image" 
     style={{
        backgroundImage: `url(${imageUrl})` 
     }}
   />
   <div className="content">
            <h1>{title}</h1>
            <span className="subtitle">{subtitle}</span>

   </div>

</div>


);
