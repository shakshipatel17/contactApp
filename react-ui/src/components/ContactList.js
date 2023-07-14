import React from'react';
import ContactCard from "./ContactCard"

const ContactList = (props) => {
alert(JSON.stringify(props))
    console.log(props);

    const deleteContactHandler =(id)=>{
    props.getContactId(id);
    };


   /* const contacts=[
    {
        id:"1",
        "name": "shakshi",
        "email": "shakshi@gmail.com",
    },
    ];*/
    const renderContactList= props.contacts.map((contact)=>{
        return <ContactCard contact = {contact} clickHandler={deleteContactHandler} key ={contact.id}/>;
    });
    return(
        <div className ="ui celled list">
        <h4>Contact List</h4>
           {renderContactList}
        </div>
    );
};

export default ContactList;