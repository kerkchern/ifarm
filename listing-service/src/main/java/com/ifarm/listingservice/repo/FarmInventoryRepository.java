package com.ifarm.listingservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.listingservice.entity.FarmInventory;

@Repository
public interface FarmInventoryRepository  extends JpaRepository<FarmInventory, Long>{

}
