package com.ifarm.listingservice.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FarmInventory {
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long inventId;
	private String name;
	private BigDecimal price;
	
	public FarmInventory() {
		
	}

	public Long getInventId() {
		return inventId;
	}

	public void setInventId(Long inventId) {
		this.inventId = inventId;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
}
