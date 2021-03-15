package com.ifarm.monitorplanservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.monitorplanservice.entity.MonitorPlan;

@Repository
public interface MonitorPlanRepository extends JpaRepository<MonitorPlan, Long> {

}
