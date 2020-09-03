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
import com.example.Freshly.model.Product;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.Freshly.dao.ProductRepository;

@Transactional

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/prdct")
public class ProductController {
    @Autowired
    private ProductRepository ProductRepository;
   

    @GetMapping("/product")
    public List<Product> getAllClasss() {
        return  (List<Product>) ProductRepository.findAll();
        //return (List<Class>) ProductRepository.findAll();
    }


    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getClassById(@PathVariable(value = "id") Long price)
        throws ResourceNotFoundException {
        Product product = ProductRepository.findById(price)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + price));
        return ResponseEntity.ok().body(product);
    }
    
    @PostMapping("/product")
    public Product createClass(@Valid @RequestBody Product product) {
        return ProductRepository.save(product);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateClass(@PathVariable(value = "id") Long price,
         @Valid @RequestBody Product productDetails) throws ResourceNotFoundException {
        Product product = ProductRepository.findById(price)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + price));

        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        product.setProduct(productDetails.getProduct());
        final Product updatedClass = ProductRepository.save(product);
        return ResponseEntity.ok(updatedClass);
    }

    @DeleteMapping("/product/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long price)
         throws ResourceNotFoundException {
        Product product = ProductRepository.findById(price)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + price));

        ProductRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

