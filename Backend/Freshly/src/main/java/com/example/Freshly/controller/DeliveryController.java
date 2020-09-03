package com.example.Freshly.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Freshly.dao.DeliveryRepository;
import com.example.Freshly.error.ResourceNotFoundException;
import com.example.Freshly.model.Delivery;

@Transactional

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/dlvry")
public class DeliveryController {
    @Autowired
    private DeliveryRepository DeliveryRepository;
   

    @GetMapping("/delivery")
    public List<Delivery> getAllClasss() {
        return  (List<Delivery>) DeliveryRepository.findAll();
        //return (List<Class>) ProductRepository.findAll();
    }


    @GetMapping("/delivery/{id}")
    public ResponseEntity<Delivery> getClassById(@PathVariable(value = "id") Long name)
        throws ResourceNotFoundException {
        Delivery delivery = DeliveryRepository.findById(name)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + name));
        return ResponseEntity.ok().body(delivery);
    }
    
    @PostMapping("/delivery")
    public Delivery createClass(@Valid @RequestBody Delivery delivery) {
        return DeliveryRepository.save(delivery);
    }

    @PutMapping("/delivery/{id}")
    public ResponseEntity<Delivery> updateClass(@PathVariable(value = "id") Long name,
         @Valid @RequestBody Delivery deliveryDetails) throws ResourceNotFoundException {
        Delivery delivery = DeliveryRepository.findById(name)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + name));

        delivery.setQuantity(deliveryDetails.getQuantity());
        delivery.setAmount(deliveryDetails.getAmount());
        delivery.setContact(deliveryDetails.getContact());
        delivery.setAddress(deliveryDetails.getAddress());
        delivery.setName(deliveryDetails.getName());
         
        final Delivery updatedClass = DeliveryRepository.save(delivery);
                
        return ResponseEntity.ok(updatedClass);

    }

    @DeleteMapping("/delivery/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long name)
         throws ResourceNotFoundException {
        Delivery delivery = DeliveryRepository.findById(name)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + name));

        DeliveryRepository.delete(delivery);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}


