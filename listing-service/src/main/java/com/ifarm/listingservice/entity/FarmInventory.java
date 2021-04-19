package com.ifarm.listingservice.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "farminventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FarmInventory {
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long inventId;
	private String name;
	private BigDecimal price;
	private int unit;
	
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

	public int getUnit() {
		return unit;
	}

	public void setUnit(int unit) {
		this.unit = unit;
	}

	
}
