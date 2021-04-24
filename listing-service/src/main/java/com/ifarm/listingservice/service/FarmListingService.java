package com.ifarm.listingservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.ifarm.listingservice.VO.MonitorPlan;
import com.ifarm.listingservice.entity.FarmListing;
import com.ifarm.listingservice.entity.FarmListingInventory;
import com.ifarm.listingservice.repo.FarmListingRepository;


@Service
@Transactional
public class FarmListingService {
	
	@Autowired
	private FarmListingRepository farmListingRepository;
	
	@Autowired
	private RestTemplate restTemplate;

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
	
	public void addMonitorPlan(long farmId) {
		MonitorPlan monitorPlan = new MonitorPlan();
		monitorPlan.setFarmId(farmId);
		restTemplate.postForObject("http://MONITOR-PLAN-SERVICE/monitorPlan/saveCrops", monitorPlan,MonitorPlan.class);
	}
	
}
