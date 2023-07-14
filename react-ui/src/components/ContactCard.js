import React from 'react';

const ContactCard =(props)=>{
    const { id, name, email, address} = props.contact;
   return(
    <div className="item">
           <div className="content">
               <div className = "header">{name}</div>
               <div>{email}</div>
               <div>{address}</div>
               </div>
               <i
                   className="trash alternate outline icon"
                   style = {{color:"red", marginTop: "7px"}}
                   onClick ={() => props.clickHandler(id)}
               ></i>
           </div>
   );
};

export default ContactCard;
