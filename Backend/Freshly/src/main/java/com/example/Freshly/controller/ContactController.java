package com.example.Freshly.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Freshly.error.ResourceNotFoundException;
import com.example.Freshly.model.Contact;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.Freshly.dao.ContactRepository;

@Transactional

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/contct")
public class ContactController {
    @Autowired
    private ContactRepository ContactRepository;
   

    @GetMapping("/contact")
    public List<Contact> getAllClasss() {
        return  (List<Contact>) ContactRepository.findAll();
        //return (List<Class>) ContactRepository.findAll();
    }


    @GetMapping("/contact/{id}")
    public ResponseEntity<Contact> getClassById(@PathVariable(value = "id") Long message)
        throws ResourceNotFoundException {
        Contact contact = ContactRepository.findById(message)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + message));
        return ResponseEntity.ok().body(contact);
    }
    
    @PostMapping("/contact")
    public Contact createClass(@Valid @RequestBody Contact contact) {
        return ContactRepository.save(contact);
    }

    @PutMapping("/contact/{id}")
    public ResponseEntity<Contact> updateClass(@PathVariable(value = "id") Long message,
         @Valid @RequestBody Contact contactDetails) throws ResourceNotFoundException {
        Contact contact = ContactRepository.findById(message)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + message));

        contact.setMessage(contactDetails.getMessage());
        contact.setEmail(contactDetails.getEmail());
        contact.setName(contactDetails.getName());
        final Contact updatedClass = ContactRepository.save(contact);
        return ResponseEntity.ok(updatedClass);
    }

    @DeleteMapping("/contact/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long message)
         throws ResourceNotFoundException {
        Contact contact = ContactRepository.findById(message)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + message));

        ContactRepository.delete(contact);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

