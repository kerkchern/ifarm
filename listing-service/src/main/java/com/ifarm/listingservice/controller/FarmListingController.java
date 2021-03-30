package com.ifarm.listingservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ifarm.listingservice.entity.FarmListing;
import com.ifarm.listingservice.entity.FarmWorkerRequest;
import com.ifarm.listingservice.service.FarmListingService;
import com.ifarm.listingservice.service.FarmWorkerRequestService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FarmListingController {
	
	@Autowired
	private FarmListingService farmListingService;
	
	@Autowired
	private FarmWorkerRequestService farmWorkerRequestService;
	
	@RequestMapping(method = RequestMethod.POST, path = "/farmListing/add")
	public FarmListing saveListing(@RequestBody FarmListing form) {
		form.setBook(false);
		form.setPendingList(null);
		form.setConfirmList(null);
		FarmListing farm= farmListingService.saveFarmListing(form);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/{farmId}")
	public Optional<FarmListing> findFarmListingById(@PathVariable("farmId") Long farmId) {
		return farmListingService.findFarmListingById(farmId);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/retrieve")
	public List<FarmListing> findAllListing() {
		return farmListingService.findAllListing();
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/retrieve/booked")
	public List<FarmListing> findAllBookedListing() {
		boolean isBook = true;
		return farmListingService.findByIsBook(isBook);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/retrieve/booked/{farmerName}")
	public List<FarmListing> findAllBookedListingByFarmer(@PathVariable String farmerName) {
		return farmListingService.findByBookedBy(farmerName);
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/farmListing/update/{farmId}")
	public FarmListing updateListing(@PathVariable long farmId, @RequestBody FarmListing form) {
		FarmListing farm= farmListingService.updateFarmListing(form);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.DELETE, path = "/farmListing/delete/{farmId}")
	public ResponseEntity<Void>  deleteListing(@PathVariable("farmId") Long farmId) {
		farmListingService.deleteById(farmId);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/farmListing/book/{farmId}/{farmerName}")
	public FarmListing updateBookingListing(@PathVariable long farmId, 
			@PathVariable String farmerName, @RequestBody FarmListing form) {
		String username = farmerName;
		
		form.setBookedBy(username);
		form.setBook(true);
		FarmListing farm= farmListingService.updateFarmListing(form);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/farmListing/request/{farmId}/{workerName}")
	public FarmListing updateRequestListing(@PathVariable long farmId, 
					@PathVariable String workerName, @RequestBody FarmListing form) {
		String username = workerName;
		
		List<String> pendingList = form.getPendingList();
		pendingList.add(username);
		
		for (int i = 0; i < pendingList.size(); i++) {
			for (int j = i + 1; j < pendingList.size(); j++) {
				if (pendingList.get(i).equals((pendingList.get(j)))) {
					pendingList.remove(j);
					j--;
				}
			}
		}
		
		form.setPendingList(pendingList);
		
		FarmListing farm= farmListingService.updateFarmListing(form);
		
		//create new FarmWorkerRequest
		
		FarmWorkerRequest farmWorkerRequest = new FarmWorkerRequest();
		farmWorkerRequest.setFarmId(farm.getFarmId());
		farmWorkerRequest.setName(farm.getName());
		farmWorkerRequest.setFromDate(farm.getFromDate());
		farmWorkerRequest.setToDate(farm.getToDate());
		farmWorkerRequest.setBookedBy(farm.getBookedBy());
		farmWorkerRequest.setWorker(workerName);
		farmWorkerRequest.setStatus("P");
		
		farmWorkerRequestService.updateFarmWorkerRequest(farmWorkerRequest);
				
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/retrieve/request/{farmerName}")
	public List<FarmWorkerRequest> findRequestBookedBy(@PathVariable String farmerName) {
		return farmWorkerRequestService.findByBookedBy(farmerName);
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/farmListing/request/accept")
	public FarmWorkerRequest acceptRequestListing(@RequestBody FarmWorkerRequest request) {
		
		long farmId = request.getFarmId();
		Optional<FarmListing> farmListingObject = farmListingService.findFarmListingById(farmId);
		FarmListing farmListing = farmListingObject.get();
		
		
		String workerName = request.getWorker();
		String action = request.getStatus();
		
		if(action.equals("A")) {
			//remove worker from pending list
			farmListing.getPendingList().remove(workerName);
			//add worker to confirmed list
			farmListing.getConfirmList().add(workerName);
			farmListingService.updateFarmListing(farmListing);
		}
		
		if(action.equals("R")){
			//remove worker from pending list
			farmListing.getPendingList().remove(workerName);
		}
		
		
		FarmWorkerRequest farmWorkerRequest = farmWorkerRequestService.acceptFarmWorkerRequest(request);
				
		return farmWorkerRequest;
	}
	
}