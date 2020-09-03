package com.example.Freshly.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "delivery")
public class Delivery {

	private long id;
	private String name;
	private String address;
	private String contact;
	private String amount;
	private String quantity;
	
	public Delivery() {
		
	}
	
	public Delivery(String name, String address, String contact, String amount, String quantity) {
		this.name = name;
		this.address = address;
		this.contact = contact;
		this.amount = amount;
		this.quantity = quantity;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "address", nullable = false)
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@Column(name = "contact", nullable = false)
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	@Column(name = "amount", nullable = false)
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	
	@Column(name = "quantity", nullable = false)
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	

	@Override
	public String toString() {
		return "Class [id=" + id + ", name=" + name + ", address=" + address + ", contact=" + contact
				+ ",amount=" + amount + ",quantity=" + quantity + "]";
	}
	
}




