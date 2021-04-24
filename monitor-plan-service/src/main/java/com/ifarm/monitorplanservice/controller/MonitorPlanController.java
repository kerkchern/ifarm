package com.ifarm.monitorplanservice.controller;

import java.util.List;

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
import com.ifarm.monitorplanservice.VO.ResponseTemplateVO;
import com.ifarm.monitorplanservice.entity.MonitorPlan;
import com.ifarm.monitorplanservice.service.MonitorPlanService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class MonitorPlanController {
	
	@Autowired
	private MonitorPlanService monitorPlanService;
	
	@RequestMapping(method = RequestMethod.POST, path = "/monitorPlan/addCrops")
	public MonitorPlan addMonitorPlan(@RequestBody MonitorPlan monitorPlan) {
		MonitorPlan farm= monitorPlanService.saveMonitorPlan(monitorPlan);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/monitorPlan/updateCrops/{monitorPlanId}")
	public MonitorPlan updateMonitorPlan(@PathVariable long monitorPlanId, @RequestBody MonitorPlan monitorPlan) {
		MonitorPlan farm= monitorPlanService.saveMonitorPlan(monitorPlan);
		return farm;
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/monitorPlan/retrieve")
	public List<MonitorPlan> findAllListing() {
		return monitorPlanService.findAllListing();
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/monitorPlan/getFarmList")
	public FarmListing[] findFarmListing() {
		return monitorPlanService.findFarmListing();
	}
}
