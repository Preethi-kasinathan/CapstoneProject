package com.example.Freshly.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	private long id;
	private String product;
	private String quantity;
	private String price;
	
	public Product() {
		
	}
	
	public Product(String product, String quantity, String price) {
		this.product = product;
		this.quantity = quantity;
		this.price = price;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "product", nullable = false)
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	
	@Column(name = "quantity", nullable = false)
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	
	@Column(name = "price", nullable = false)
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Class [id=" + id + ", product=" + product + ", quantity=" + quantity + ", price=" + price
				+ "]";
	}
	
}




