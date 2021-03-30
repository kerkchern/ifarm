package com.ifarm.listingservice.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifarm.listingservice.entity.FarmWorkerRequest;


@Repository
public interface FarmWorkerRequestRepository extends JpaRepository<FarmWorkerRequest, Long>{

	List<FarmWorkerRequest> findByBookedBy(String farmerName);

}
