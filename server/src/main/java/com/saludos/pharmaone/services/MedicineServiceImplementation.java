package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.Medicine;
import com.saludos.pharmaone.entities.MedicineGroup;
import com.saludos.pharmaone.repositories.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MedicineServiceImplementation  implements MedicineService{
    @Autowired
    MedicineRepository medicineRepository;

    MedicineGroup medicineGroup;

    @Override
    public List<Medicine> getAllMedicines(Medicine medicine) {
        return medicineRepository.findAll();
    }

    @Override
    public List<Medicine> getByGroupId(int groupId) {
        return medicineRepository.findByMedicineGroupGroupId(groupId);
    }

    @Override
    public Long getNumberOfMedicine(int groupId) {
        return medicineRepository.countByMedicineGroupGroupId(groupId);
    }


    @Override
    public String addMedicine(Medicine medicine) {
        medicineRepository.save(medicine);
        System.out.println("Added medicine "+ medicine.getMedicineName());
        return "added medicine "+ medicine.getMedicineName() ;
    }

    @Override
    public String modifyMedicine(Medicine medicine) {
        medicineRepository.save(medicine);
        return "Modified " + medicine.getMedicineName();
    }

    @Override
    public Medicine getSingleMedicine(String medicineId) {
        return medicineRepository.findById(medicineId).get();
    }

    @Override
    public String deleteMedicine(String medicineId) {
        String returnMessage;
        try{
            medicineRepository.deleteById(medicineId);
            returnMessage = "Deleted Successfully.";
        } catch (EmptyResultDataAccessException e){
            returnMessage = "Medicine already deleted.";
        }

        return returnMessage;
    }

    @Override
    public String changeMedicineGroup(Medicine medicine) {
       medicineRepository.save(medicine);
        return "success";
    }
}
