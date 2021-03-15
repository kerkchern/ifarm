package com.ifarm.cloudgateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallBackMethodController {
	
	@GetMapping("/monitorPlanServiceFallBack")
	public String monitorPlanFallBackMethod() {
		return "Monitor Plan Service is taking longer than expected. Please try again later.";
	}
	
	@GetMapping("/listingServiceFallBack")
	public String listingFallBackMethod() {
		return "Listing Service is taking longer than expected. Please try again later.";
	}
}
