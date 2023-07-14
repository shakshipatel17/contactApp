import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts, contact]);
  };

  const removeContactHandler= (name) =>{
    console.log("delete");
    const newContactList = contacts.filter((contact) =>{
        return contact.name !== name;
    });
    setContacts(newContactList);
  };

  return (
   <Router>
      <div className="ui container">
          <Header/>
          <br/><br/>
          <Routes>
            <Route path="/contactList" element={<ContactList removeContactHandler={removeContactHandler} contacts={contacts}/>}/>
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          </Routes>
      </div>
   </Router>

  );
}

export default App;
