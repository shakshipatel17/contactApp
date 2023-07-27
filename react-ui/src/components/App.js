import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList";
import UpdateContact from "./UpdateContact";
import axios from "axios";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);

  return (
   <Router>
      <div className="ui container">
          <Header/>
          <br/><br/>
          <Routes>
            <Route path="/" element={<ContactList/>}/>
            <Route path="/add" element={<AddContact/>}/>
            <Route path="/update" element={<UpdateContact/>}/>
          </Routes>
      </div>
   </Router>

  );
}

export default App;
