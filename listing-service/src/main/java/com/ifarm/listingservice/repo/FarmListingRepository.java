package com.ifarm.listingservice.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.listingservice.entity.FarmListing;

@Repository
public interface FarmListingRepository extends JpaRepository<FarmListing, Long> {

	List<FarmListing> findByIsBook(boolean isBook);

	List<FarmListing> findByBookedBy(String farmerName);

	Integer countByType(String string);

}
