package com.ifarm.monitorplanservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifarm.monitorplanservice.VO.ResponseTemplateVO;
import com.ifarm.monitorplanservice.entity.MonitorPlan;
import com.ifarm.monitorplanservice.service.MonitorPlanService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping("/monitorPlan")
public class MonitorPlanController {
	
	@Autowired
	private MonitorPlanService monitorPlanService;
	
	@PostMapping("/")
	public MonitorPlan saveMonitorPlan(@RequestBody MonitorPlan monitorPlan) {
		MonitorPlan farm= monitorPlanService.saveMonitorPlan(monitorPlan);
		return farm;
	}
	
	@GetMapping("/{farmId}")
	public ResponseTemplateVO getMonitorPlanWithFarmListing(@PathVariable("farmId") Long farmId) {
		return monitorPlanService.getMonitorPlanWithFarmListing(farmId);
	}
	
	
}
