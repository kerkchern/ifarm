package com.ifarm.listingservice.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


	@Entity
	@Table(name = "farmlistinginventory")
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	@IdClass(FarmInventId.class)
	public class FarmListingInventory implements Serializable {
		
		@Id
		private Long farmId;
		@Id
		private Long inventId;
		private String name;
		private BigDecimal price;
		private int unit;
		private BigDecimal total;
		
		public FarmListingInventory() {
			
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

		public Long getFarmId() {
			return farmId;
		}

		public void setFarmId(Long farmId) {
			this.farmId = farmId;
		}

		public BigDecimal getTotal() {
			return total;
		}

		public void setTotal(BigDecimal total) {
			this.total = total;
		}

}
