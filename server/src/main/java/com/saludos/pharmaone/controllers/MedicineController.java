package com.saludos.pharmaone.controllers;

import com.saludos.pharmaone.entities.MedicineGroup;
import com.saludos.pharmaone.entities.Sales;
import com.saludos.pharmaone.entities.User;
import com.saludos.pharmaone.repositories.GroupRepository;
import com.saludos.pharmaone.repositories.MedicineRepository;
import com.saludos.pharmaone.repositories.SalesRepository;
import com.saludos.pharmaone.services.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.saludos.pharmaone.entities.Medicine;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(originPatterns = "https://pharmaone-frontend.vercel.app/" , allowedHeaders = "*")
@RestController
public class MedicineController {

   @Autowired
    MedicineService medicineService;

   @Autowired
   MedicineRepository medicineRepository;

   @Autowired
    GroupRepository groupRepository;

   @Autowired
    SalesRepository salesRepository;

   @GetMapping("/getbygroupid/{groupId}")
   public List<Medicine> getByGroupId(@PathVariable String groupId){
       return medicineService.getByGroupId(Integer.parseInt(groupId));
   }

   @GetMapping("/getnumberofmedicineingroup/{groupId}")
   public Long getNumberOfMedicineInGroup(@PathVariable String groupId){
       return medicineService.getNumberOfMedicine(Integer.parseInt(groupId));
   }
    
    @GetMapping("/getallmedicine")
    public List<Medicine> getAllMedicine(Medicine medicine){

        return medicineService.getAllMedicines(medicine);
    }
    @GetMapping("/getsinglemedicine/{medicineId}")
    public Medicine getSingleMedicine(@PathVariable String medicineId){
        return medicineService.getSingleMedicine(medicineId);
    }
    @PostMapping("/addMedicine")
    public String addMedicine (@RequestBody Medicine medicine){
        return medicineService.addMedicine(medicine);
    }

    @PutMapping("/modifymedicine/{medicineId}")
    public String modifyMedicine(@RequestBody Medicine medicine){
        return medicineService.modifyMedicine(medicine);

    }
    @DeleteMapping("/deletemedicine/{medicineId}")
    public String deleteMedicine (@PathVariable String medicineId){
        return medicineService.deleteMedicine(medicineId);
    }

    @PatchMapping("/changeMedicineGroup/{medicineId}/{groupId}")
    public String changeMedicineGroup (@PathVariable String medicineId , @PathVariable String groupId){
       Medicine medicine = medicineRepository.getById(medicineId);
       MedicineGroup medicineGroup = groupRepository.getById(Integer.parseInt(groupId));
       medicine.setMedicineGroup(medicineGroup);

       try {
       medicineRepository.save(medicine);
            return "Successfully changed " + medicine.getMedicineName()+"'s group to " + medicineGroup.getGroupName();
       }catch (Exception e){
           return e.getLocalizedMessage();
       }

    }

    @PatchMapping("/sellMedicine/{medicineId}")
    public String sellMedicine(@PathVariable String medicineId, @RequestBody Medicine medicine){
        System.out.println(medicine.getInStock());
        Medicine savedMedicine = medicineRepository.getById(medicineId);

        int updatedLifeTimeSales = savedMedicine.getLifetimeSales() + medicine.getInStock();
        savedMedicine.setLifetimeSales(updatedLifeTimeSales);
        savedMedicine.setInStock(savedMedicine.getInStock() - medicine.getInStock());
        medicineRepository.save(savedMedicine);

        User user = new User(1,"Jude Bellingham","Dortmund");
        Timestamp timestamp =  Timestamp.valueOf(LocalDateTime.now());

        Sales sale = new Sales(user , BigDecimal.valueOf(savedMedicine.getPrice() * medicine.getInStock()), savedMedicine , timestamp );
        salesRepository.save(sale);

       return "Okay";
    }


}
