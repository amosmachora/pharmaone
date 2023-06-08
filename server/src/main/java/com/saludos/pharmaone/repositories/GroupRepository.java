package com.saludos.pharmaone.repositories;

import com.saludos.pharmaone.entities.MedicineGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<MedicineGroup , Integer> {
}
