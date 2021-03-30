package com.ifarm.listingservice.entity;

import java.math.BigDecimal;
import java.sql.Blob;
import java.util.List;

import javax.persistence.ElementCollection;
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
public class FarmListing {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long farmId;
	private String name;
	private BigDecimal price;
	private String fromDate;
	private String toDate;
	private String area;
	private String type;
	private boolean isBook;
	private String bookedBy;
	@ElementCollection
	private List<String> pendingList;
	@ElementCollection
	private List<String> confirmList;
	private Blob image;
	
	public FarmListing() {
		
	}
	
	public Long getFarmId() {
		return farmId;
	}
	public void setFarmId(Long farmId) {
		this.farmId = farmId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Blob getImage() {
		return image;
	}
	public void setImage(Blob image) {
		this.image = image;
	}

	public boolean isBook() {
		return isBook;
	}

	public void setBook(boolean isBook) {
		this.isBook = isBook;
	}

	public List<String> getPendingList() {
		return pendingList;
	}

	public void setPendingList(List<String> pendingList) {
		this.pendingList = pendingList;
	}

	public List<String> getConfirmList() {
		return confirmList;
	}

	public void setConfirmList(List<String> confirmList) {
		this.confirmList = confirmList;
	}

	public String getBookedBy() {
		return bookedBy;
	}

	public void setBookedBy(String bookedBy) {
		this.bookedBy = bookedBy;
	}

	
}
