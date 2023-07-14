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

  const removeContactHandler= (id) =>{
    const newContactList = contacts.filter((contact) =>{
        return contact.id !== id;
    });
    setContacts(newContactList);
  };
//  useEffect(() => {
//      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//      if (retriveContacts) setContacts(retriveContacts);
//    }, []);
//
//  useEffect(() => {
//    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
//  }, [contacts]);
  return (
   <Router>
      <div className="ui container">
          <Header/>
          <br/><br/>
          <Routes>
            <Route path="/" element={<ContactList contacts={contacts}/>}/>
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          </Routes>
      </div>
   </Router>

  );
}

export default App;
