package com.ifarm.monitorplanservice.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "monitorplan")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MonitorPlan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long monitorPlanId;
	private Long farmId;
	private String remarks;
	private String riskLevel;
	private String mineralLevel;
	private String soilLevel;
	
	
	public MonitorPlan() {
		
	}
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
	public Long getMonitorPlanId() {
		return monitorPlanId;
	}
	public void setMonitorPlanId(Long monitorPlanId) {
		this.monitorPlanId = monitorPlanId;
	}

}
