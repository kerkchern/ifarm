package com.ifarm.listingservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifarm.listingservice.entity.FarmInventory;
import com.ifarm.listingservice.entity.FarmListingInventory;
import com.ifarm.listingservice.repo.FarmInventoryRepository;
import com.ifarm.listingservice.repo.FarmListingInventoryRepository;

@Service
public class FarmListingInventoryService {
	
	@Autowired
	private FarmListingInventoryRepository farmListingInventoryRepository;

	public FarmListingInventory saveFarmListingInventory(FarmListingInventory farmListingInventory) {
		return farmListingInventoryRepository.save(farmListingInventory);
	}

	public FarmListingInventory updateFarmListingInventory(FarmListingInventory farmListingInventory) {
		return farmListingInventoryRepository.save(farmListingInventory);
	}

	public List<FarmListingInventory> findFarmListingInventoryByIdFarmId(Long farmId) {
		return farmListingInventoryRepository.findByfarmId(farmId);
	}	
	
}
