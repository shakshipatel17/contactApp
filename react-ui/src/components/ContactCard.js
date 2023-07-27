import React from 'react';
import {Link} from "react-router-dom";

const ContactCard =(props)=>{
    const { name, email, address} = props.contact;
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
                   onClick ={() => props.clickHandler(name)}
               ></i>
               <Link to="/update" state={props.contact}>
                    <i className="edit alternate outline icon"
                       style = {{color:"blue", marginTop: "7px"}}
                   ></i>
               </Link>
           </div>
   );
};

export default ContactCard;
