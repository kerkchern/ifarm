package com.ifarm.listingservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifarm.listingservice.entity.FarmListing;
import com.ifarm.listingservice.repo.FarmListingRepository;


@Service
public class FarmListingService {
	
	@Autowired
	private FarmListingRepository farmListingRepository;

	public FarmListing saveFarmListing(FarmListing farmListing) {
		return farmListingRepository.save(farmListing);
	}	
	
	public Optional<FarmListing> findFarmListingById(Long farmId) {
		return farmListingRepository.findById(farmId);
	}

	public List<FarmListing> findAllListing() {
		return farmListingRepository.findAll();
	}

	public void deleteById(Long farmId) {
		farmListingRepository.deleteById(farmId);
	}

	public FarmListing updateFarmListing(FarmListing form) {
		return farmListingRepository.save(form);
	}

	public List<FarmListing> findByIsBook(boolean isBook) {
		return farmListingRepository.findByIsBook(isBook);
	}

	public List<FarmListing> findByBookedBy(String farmerName) {
		return farmListingRepository.findByBookedBy(farmerName);
	}	
	
}
