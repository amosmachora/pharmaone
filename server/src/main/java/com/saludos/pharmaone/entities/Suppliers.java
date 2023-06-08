package com.saludos.pharmaone.entities;


import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Suppliers {
    @Id
    String supplierId;
    String supplierName;
    String supplierEmail;

    @OneToOne
    MedicineGroup medicineGroup;

    public Suppliers(){

    }

    public Suppliers(String supplierId, String supplierName, String supplierEmail, MedicineGroup medicineGroup) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.supplierEmail = supplierEmail;
        this.medicineGroup = medicineGroup;
    }

    public String getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(String supplierId) {
        this.supplierId = supplierId;
    }

    public String getSupplerName() {
        return supplierName;
    }

    public void setSupplerName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public MedicineGroup getMedicineGroup() {
        return medicineGroup;
    }

    public void setMedicineGroup(MedicineGroup medicineGroup) {
        this.medicineGroup = medicineGroup;
    }

    public String getSupplierEmail() {
        return supplierEmail;
    }

    public void setSupplierEmail(String supplierEmail) {
        this.supplierEmail = supplierEmail;
    }
}
