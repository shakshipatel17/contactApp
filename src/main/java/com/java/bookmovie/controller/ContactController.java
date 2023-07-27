package com.java.bookmovie.controller;

import com.java.bookmovie.model.Contact;
import com.java.bookmovie.repo.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactRepo contactRepo;

    @GetMapping("/getAllContacts")
    public ResponseEntity<List<Contact>> getAllContacts(){
        try{
            List<Contact> contactList = new ArrayList<>();
            contactRepo.findAll().forEach(contactList::add);

            if(contactList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(contactList, HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getContactById/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id){
        Optional<Contact> contactData = contactRepo.findById(id);

        if(contactData.isPresent()){
            return new ResponseEntity<>(contactData.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/addContact")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact){
        Contact contactObj = contactRepo.save(contact);

        return new ResponseEntity<>(contactObj, HttpStatus.OK);
    }

    @PostMapping("/updateContactById")
    public ResponseEntity<Contact> updateContactById(@RequestBody Contact contact){
        Optional<Contact> oldContactData = contactRepo.findById(contact.getId());

        if (oldContactData.isPresent()){
            Contact updateContactData = oldContactData.get();
            updateContactData.setName(contact.getName());
            updateContactData.setEmail(contact.getEmail());
            updateContactData.setAddress(contact.getAddress());

            Contact contactObj = contactRepo.save(updateContactData);
            return new ResponseEntity<>(contactObj, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/deleteContactById/{id}")
    public ResponseEntity<HttpStatus> deleteContactById(@PathVariable Long id){
        contactRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
