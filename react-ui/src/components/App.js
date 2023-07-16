import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList";
import axios from "axios";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);
  const [filteredContact, setFilteredContact] = useState(contacts);
  const [color, setColor] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts, contact]);
    setFilteredContact([...contacts, contact]);
  };

  const removeContactHandler= (name) =>{
    console.log("delete");
    const newContactList = contacts.filter((contact) =>{
        return contact.name !== name;
    });
    setContacts(newContactList);
    setFilteredContact(newContactList);

   };

   const filterContactHandler=(name)=>{
    if (name==""){
        setFilteredContact(contacts);
    }else {
        const startsWith = contacts.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()));
        setFilteredContact(startsWith);
    }};

    /*useEffect(() => {
        axios
          .get("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093")
          .then((res) => {
            console.log("data ---> "+JSON.stringify(res.data))
            setColor(res.data)

          })
      }, [] )*/


  return (
   <Router>
      <div className="ui container">
          <Header/>
          <br/><br/>
          <Routes>
            <Route path="/" element={<ContactList removeContactHandler={removeContactHandler} contacts={filteredContact}  filterContactHandler={filterContactHandler} />}/>
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          </Routes>
      </div>
   </Router>

  );
}

export default App;
