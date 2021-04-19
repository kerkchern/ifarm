package com.ifarm.listingservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifarm.listingservice.entity.FarmInventory;
import com.ifarm.listingservice.repo.FarmInventoryRepository;

@Service
public class FarmInventoryService {
	
	@Autowired
	private FarmInventoryRepository farmInventoryRepository;

	public FarmInventory saveFarmInventory(FarmInventory farmInventory) {
		return farmInventoryRepository.save(farmInventory);
	}

	public List<FarmInventory> findAllInventory() {
		return farmInventoryRepository.findAll();
	}

	public void deleteById(Long inventId) {
		farmInventoryRepository.deleteById(inventId);
	}

	public FarmInventory updateFarmInventory(FarmInventory farmInventory) {
		return farmInventoryRepository.save(farmInventory);
	}	
	
}
