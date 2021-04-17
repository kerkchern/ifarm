package com.ifarm.listingservice.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.listingservice.entity.FarmListingInventory;

@Repository
public interface FarmListingInventoryRepository  extends JpaRepository<FarmListingInventory, Long>{

	List<FarmListingInventory> findByfarmId(Long farmId);

}
