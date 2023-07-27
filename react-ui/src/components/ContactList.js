import React,{useState, useEffect} from'react';
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:9090";

const ContactList = (props) => {

    const [contacts, setContacts] = useState([]);
    const [filteredContact, setFilteredContact] = useState(contacts);
    const fetchData = () => {
        axios.get(API_URL + "/getAllContacts")
              .then((res) => {
                setContacts(res.data);
                setFilteredContact(res.data);
        })
     }
    useEffect(() => {
         fetchData();
       }, [] )

    const removeContactHandler = (id) => {
        axios.delete(API_URL + "/deleteContactById/" + id)
        fetchData();
    }
    const filterContactHandler=(name)=>{
        if (name==""){
            setFilteredContact(contacts);
        }else {
            const startsWith = contacts.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()));
            setFilteredContact(startsWith);
        }
    };



    return(
        <div className ="ui celled list">
        <h4>Contact List</h4>
         <div className= "field">
             <label>Search</label>
             <input type="text" name ="find" placeholder="Find" onChange ={(event) => filterContactHandler(event.target.value)}/>
         </div>
           {
           filteredContact.map((contact)=> {
                   return <ContactCard contact = {contact} clickHandler={() => removeContactHandler(contact.id)} key ={contact.id}/>;
               })
           }

           <Link to="/add" className="ui button blue">Add Contact</Link>
        </div>
    );
};

export default ContactList;