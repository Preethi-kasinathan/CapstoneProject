package com.example.Freshly.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Freshly.model.Delivery;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery,Long> {
    
}
