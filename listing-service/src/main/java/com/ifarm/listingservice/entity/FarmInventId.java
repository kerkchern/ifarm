package com.ifarm.listingservice.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FarmInventId implements Serializable {
    private Long farmId;

	private Long inventId;

//    // default constructor
//
//    public FarmInventId(String farmId, String inventId) {
//        this.farmId = farmId;
//        this.inventId = inventId;
//    }

    // equals() and hashCode()
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((farmId == null) ? 0 : farmId.hashCode());
		result = prime * result + ((inventId == null) ? 0 : inventId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FarmInventId other = (FarmInventId) obj;
		if (farmId == null) {
			if (other.farmId != null)
				return false;
		} else if (!farmId.equals(other.farmId))
			return false;
		if (inventId == null) {
			if (other.inventId != null)
				return false;
		} else if (!inventId.equals(other.inventId))
			return false;
		return true;
	}
    
}
