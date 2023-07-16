import React from'react';
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {

    return(
        <div className ="ui celled list">
        <h4>Contact List</h4>
         <div className= "field">
             <label>Search</label>
             <input type="text" name ="find" placeholder="Find" onChange ={(event) => props.filterContactHandler(event.target.value)}/>
         </div>
           {
           props.contacts.map((contact)=> {
                   return <ContactCard contact = {contact} clickHandler={props.removeContactHandler} key ={contact.id}/>;
               })
           }

           <Link to="/add" className="ui button blue">Add Contact</Link>
        </div>
    );
};

export default ContactList;