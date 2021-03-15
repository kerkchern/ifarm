package com.ifarm.monitorplanservice.VO;

import com.ifarm.monitorplanservice.entity.MonitorPlan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
	private FarmListing farmListing;
	private MonitorPlan monitorPlan;
	public FarmListing getFarmListing() {
		return farmListing;
	}
	public void setFarmListing(FarmListing farmListing) {
		this.farmListing = farmListing;
	}
	public MonitorPlan getMonitorPlan() {
		return monitorPlan;
	}
	public void setMonitorPlan(MonitorPlan monitorPlan) {
		this.monitorPlan = monitorPlan;
	}
}
