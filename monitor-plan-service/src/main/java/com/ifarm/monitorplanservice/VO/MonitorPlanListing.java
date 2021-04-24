package com.ifarm.monitorplanservice.VO;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class MonitorPlanListing {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long farmId;
	private String farmName;
	private String remarks;
	private String riskLevel;
	private String mineralLevel;
	private String soilLevel;
	
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getRiskLevel() {
		return riskLevel;
	}
	public void setRiskLevel(String riskLevel) {
		this.riskLevel = riskLevel;
	}
	public String getMineralLevel() {
		return mineralLevel;
	}
	public void setMineralLevel(String mineralLevel) {
		this.mineralLevel = mineralLevel;
	}
	public String getSoilLevel() {
		return soilLevel;
	}
	public void setSoilLevel(String soilLevel) {
		this.soilLevel = soilLevel;
	}
	public Long getFarmId() {
		return farmId;
	}
	public void setFarmId(Long farmId) {
		this.farmId = farmId;
	}
	public String getFarmName() {
		return farmName;
	}
	public void setFarmName(String farmName) {
		this.farmName = farmName;
	}
	

}
