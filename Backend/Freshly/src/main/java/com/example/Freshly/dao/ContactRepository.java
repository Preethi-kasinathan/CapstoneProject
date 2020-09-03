package com.example.Freshly.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Freshly.model.Contact;


@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {
    
}
