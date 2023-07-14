import React from'react';
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    return(
        <div className ="ui celled list">
        <h4>Contact List</h4>
           {
           props.contacts.map((contact)=> {
                   return <ContactCard contact = {contact} clickHandler={props.removeContactHandler} key ={contact.id}/>;
               })
           }
        </div>
    );
};

export default ContactList;