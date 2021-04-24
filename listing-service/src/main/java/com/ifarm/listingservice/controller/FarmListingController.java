package com.ifarm.listingservice.controller;

import java.math.BigDecimal;
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

import com.ifarm.listingservice.entity.FarmInventory;
import com.ifarm.listingservice.entity.FarmListing;
import com.ifarm.listingservice.entity.FarmListingInventory;
import com.ifarm.listingservice.entity.FarmWorkerRequest;
import com.ifarm.listingservice.service.FarmInventoryService;
import com.ifarm.listingservice.service.FarmListingInventoryService;
import com.ifarm.listingservice.service.FarmListingService;
import com.ifarm.listingservice.service.FarmWorkerRequestService;
import com.ifarm.listingservice.web.FarmInventoryForm;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FarmListingController {
	
	@Autowired
	private FarmListingService farmListingService;
	
	@Autowired
	private FarmWorkerRequestService farmWorkerRequestService;
	
	@Autowired
	private FarmInventoryService farmInventoryService;
	
	@Autowired
	private FarmListingInventoryService farmInventoryListingService;
	
	@RequestMapping(method = RequestMethod.POST, path = "/farmListing/add")
	public FarmListing saveListing(@RequestBody FarmListing form) {
		form.setBook(false);
		form.setPendingList(null);
		form.setConfirmList(null);
		FarmListing farm= farmListingService.saveFarmListing(form);
		
		Long farmId = form.getFarmId();
		
		List<FarmInventory> list = farmInventoryService.findAllInventory();
		for(FarmInventory inventory: list) {
			FarmListingInventory farmListingInventory = new FarmListingInventory();
			farmListingInventory.setFarmId(farmId);
			farmListingInventory.setInventId(inventory.getInventId());
			farmListingInventory.setName(inventory.getName());
			farmListingInventory.setPrice(inventory.getPrice());
			farmListingInventory.setUnit(0);
			farmListingInventory.setTotal(new BigDecimal(0));
			farmInventoryListingService.saveFarmListingInventory(farmListingInventory);
		}
		
		farmListingService.addMonitorPlan(farmId);
		
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
		
		//insert values for Monitor Plan
		
		
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
	
	@RequestMapping(method = RequestMethod.POST, path = "/farmListing/inventory/add")
	public FarmInventory saveInventory(@RequestBody FarmInventory form) {

		FarmInventory inventory= farmInventoryService.saveFarmInventory(form);
		
		for(FarmListing farmListing: farmListingService.findAllListing()) {
			FarmListingInventory farmListingInventory = new FarmListingInventory();
			farmListingInventory.setFarmId(farmListing.getFarmId());
			farmListingInventory.setInventId(inventory.getInventId());
			farmListingInventory.setName(inventory.getName());
			farmListingInventory.setPrice(inventory.getPrice());
			farmListingInventory.setUnit(inventory.getUnit());
			farmListingInventory.setTotal(inventory.getPrice());
			farmInventoryListingService.saveFarmListingInventory(farmListingInventory);
		}
		
		return inventory;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/inventory/retrieve")
	public List<FarmInventory> findAllInventory() {
		return farmInventoryService.findAllInventory();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, path = "/farmListing/inventory/delete/{inventId}")
	public ResponseEntity<Void>  deleteInventory(@PathVariable("inventId") Long inventId) {
		farmInventoryService.deleteById(inventId);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/farmListing/farmerInventory/add")
	public void saveFarmerInventory(@RequestBody FarmInventoryForm form) {

		Long farmId = form.getListingId();
		
		for(FarmInventory inventory: form.getFarmInventoryList()) {
			FarmListingInventory farmListingInventory = new FarmListingInventory();
			farmListingInventory.setFarmId(farmId);
			farmListingInventory.setInventId(inventory.getInventId());
			farmListingInventory.setName(inventory.getName());
			farmListingInventory.setPrice(inventory.getPrice());
			farmListingInventory.setUnit(inventory.getUnit());
			farmListingInventory.setTotal(inventory.getPrice().multiply(BigDecimal.valueOf( inventory.getUnit() )));
			farmInventoryListingService.saveFarmListingInventory(farmListingInventory);
		}
//		
//		Optional<FarmListing> optionalFarmListing = farmListingService.findFarmListingById(farmId);
//		FarmListing farmListing = optionalFarmListing.get();
//		farmListingService.updateFarmListing(farmListing);
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/farmListing/farmerInventory/retrieve/{farmId}")
	public List<FarmListingInventory> findFarmListingInventory(@PathVariable("farmId") Long farmId) {
		List<FarmListingInventory> farmListingInventory = farmInventoryListingService.findFarmListingInventoryByIdFarmId(farmId);
		return farmListingInventory;
	}

	
}
