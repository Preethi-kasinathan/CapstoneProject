package com.example.Freshly.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Freshly.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    
}
