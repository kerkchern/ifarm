package com.ifarm.monitorplanservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ifarm.monitorplanservice.VO.FarmListing;
import com.ifarm.monitorplanservice.VO.ResponseTemplateVO;
import com.ifarm.monitorplanservice.entity.MonitorPlan;
import com.ifarm.monitorplanservice.repository.MonitorPlanRepository;

@Service
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

	public ResponseTemplateVO getMonitorPlanWithFarmListing(Long farmId) {
		ResponseTemplateVO vo = new ResponseTemplateVO();
		MonitorPlan monitorPlan =  monitorPlanRepository.findById(farmId).get();
		
		FarmListing farmListing = restTemplate.getForObject(
				"http://LISTING-SERVICE/farmListing/" + monitorPlan.getFarmId(), 
				FarmListing.class);
				
		vo.setMonitorPlan(monitorPlan);
		vo.setFarmListing(farmListing);
		
		return vo;
	}

	

}
