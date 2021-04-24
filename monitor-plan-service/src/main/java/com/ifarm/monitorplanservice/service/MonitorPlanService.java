package com.ifarm.monitorplanservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.ifarm.monitorplanservice.VO.FarmListing;
import com.ifarm.monitorplanservice.VO.MonitorPlanListing;
import com.ifarm.monitorplanservice.entity.MonitorPlan;
import com.ifarm.monitorplanservice.repository.MonitorPlanRepository;


@Service
@Transactional
public class MonitorPlanService {
	
	@Autowired
	private MonitorPlanRepository monitorPlanRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	 
	
	public MonitorPlan saveMonitorPlan(MonitorPlan monitorPlan) {
		return monitorPlanRepository.save(monitorPlan);
	}
	
	public Optional<MonitorPlan> findMonitorPlanById(Long id) {
		return monitorPlanRepository.findById(id);
	}
	
	public List<MonitorPlan> findAllListing() {
		return monitorPlanRepository.findAll();
	}

	public List<MonitorPlanListing> getMonitorPlanWithFarmListing(String farmerName) {
		List<MonitorPlanListing> monitorPlanListings = new ArrayList<MonitorPlanListing>();
		
		
		FarmListing[] farmListings = restTemplate.getForObject("http://LISTING-SERVICE/farmListing/retrieve", FarmListing[].class);

		List<MonitorPlan> monitorPlans =  monitorPlanRepository.findAll();
		for(int i=0; i < farmListings.length;i++) {
			MonitorPlanListing monitorPlanListing = new MonitorPlanListing();
				monitorPlanListing.setFarmId(farmListings[i].getFarmId());
				monitorPlanListing.setFarmName(farmListings[i].getName());
				monitorPlanListing.setMineralLevel(monitorPlans.get(i).getMineralLevel());
				monitorPlanListing.setRemarks(monitorPlans.get(i).getRemarks());
				monitorPlanListing.setRiskLevel(monitorPlans.get(i).getRiskLevel());
				monitorPlanListing.setSoilLevel(monitorPlans.get(i).getSoilLevel());
				monitorPlanListings.add(monitorPlanListing);
			}
			return monitorPlanListings;		

	}
	
	
	public MonitorPlan getMonitorPlanByfarmId(Long id) {
		return monitorPlanRepository.getMonitorPlanByfarmId(id);
	}
	
	public FarmListing[] findFarmListing() {
		return restTemplate.getForObject("http://LISTING-SERVICE/farmListing/retrieve", FarmListing[].class);
	}
	
	
	
	

	

}
