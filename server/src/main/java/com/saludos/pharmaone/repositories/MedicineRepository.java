package com.saludos.pharmaone.repositories;

import com.saludos.pharmaone.entities.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicineRepository  extends JpaRepository<Medicine , String> {
    public List<Medicine> findByMedicineGroupGroupId(int groupId);

    public long countByMedicineGroupGroupId(int groupId);
}
