package com.ifarm.monitorplanservice.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ifarm.monitorplanservice.VO.FarmListing;
import com.ifarm.monitorplanservice.VO.MonitorPlanListing;
import com.ifarm.monitorplanservice.VO.ResponseTemplateVO;
import com.ifarm.monitorplanservice.entity.MonitorPlan;
import com.ifarm.monitorplanservice.service.MonitorPlanService;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class MonitorPlanController {
	
	@Autowired
	private MonitorPlanService monitorPlanService;
	

	@RequestMapping(method = RequestMethod.POST, path = "/")
	public MonitorPlan saveMonitorPlan(@RequestBody MonitorPlan monitorPlan) {
		MonitorPlan farm= monitorPlanService.saveMonitorPlan(monitorPlan);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/monitorPlan/getfarmer/{farmId}")
	public MonitorPlan getFarmerMonitorPlan(@PathVariable("farmId") Long farmId) {
		return monitorPlanService.getMonitorPlanByfarmId(farmId);
	}
	
	
	@RequestMapping(method = RequestMethod.GET, path = "/monitorPlan/getfarmerlisting/{farmerName}")
	public List<MonitorPlanListing> getFarmerTest(@PathVariable("farmerName") String farmerName) {
		return monitorPlanService.getMonitorPlanWithFarmListing(farmerName);
	}
	
	
	
}
