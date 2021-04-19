package com.ifarm.listingservice.web;

import java.util.List;

import com.ifarm.listingservice.entity.FarmInventory;

public class FarmInventoryForm {
	private Long listingId;
	private boolean isBooked;
	private List<FarmInventory> farmInventoryList;
	public Long getListingId() {
		return listingId;
	}
	public void setListingId(Long listingId) {
		this.listingId = listingId;
	}
	public List<FarmInventory> getFarmInventoryList() {
		return farmInventoryList;
	}
	public void setFarmInventoryList(List<FarmInventory> farmInventoryList) {
		this.farmInventoryList = farmInventoryList;
	}
	public boolean isBooked() {
		return isBooked;
	}
	public void setBooked(boolean isBooked) {
		this.isBooked = isBooked;
	}
}
