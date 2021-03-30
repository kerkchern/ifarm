package com.ifarm.listingservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifarm.listingservice.entity.FarmWorkerRequest;
import com.ifarm.listingservice.repo.FarmWorkerRequestRepository;

@Service
public class FarmWorkerRequestService{
	
	@Autowired
	private FarmWorkerRequestRepository farmWorkerRequestRepository;

	public List<FarmWorkerRequest> findByBookedBy(String farmerName) {
		return farmWorkerRequestRepository.findByBookedBy(farmerName);
	}

	public void updateFarmWorkerRequest(FarmWorkerRequest farmWorkerRequest) {
		farmWorkerRequestRepository.save(farmWorkerRequest);
	}

	public FarmWorkerRequest acceptFarmWorkerRequest(FarmWorkerRequest request) {
		return farmWorkerRequestRepository.save(request);
	}

	
}
