package com.ifarm.listingservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.listingservice.entity.FarmListing;

@Repository
public interface FarmListingRepository extends JpaRepository<FarmListing, Long> {

}
