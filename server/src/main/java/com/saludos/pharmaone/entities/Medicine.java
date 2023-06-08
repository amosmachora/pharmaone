package com.saludos.pharmaone.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Medicine {
    @Id
    String medicineId;
    String medicineName;
    int inStock;
    int lifetimeSupply;
    int lifetimeSales;
    String howToUse;
    String sideEffects;
    int price;

    @OneToOne
    MedicineGroup medicineGroup;

    public Medicine (){

    }

    public Medicine(String medicineId, String medicineName, int inStock, int lifetimeSupply, int lifetimeSales, String howToUse, String sideEffects, int groupId , int price) {
        this.medicineId = medicineId;
        this.medicineName = medicineName;
        this.inStock = inStock;
        this.lifetimeSupply = lifetimeSupply;
        this.lifetimeSales = lifetimeSales;
        this.howToUse = howToUse;
        this.sideEffects = sideEffects;
        this.medicineGroup = new MedicineGroup( groupId, "" ,"");
        this.price = price;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public String getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(String medicineId) {
        this.medicineId = medicineId;
    }

    public int getInStock() {
        return inStock;
    }

    public void setInStock(int inStock) {
        this.inStock = inStock;
    }

    public int getLifetimeSupply() {
        return lifetimeSupply;
    }

    public void setLifetimeSupply(int lifetimeSupply) {
        this.lifetimeSupply = lifetimeSupply;
    }

    public int getLifetimeSales() {
        return lifetimeSales;
    }

    public void setLifetimeSales(int lifetimeSales) {
        this.lifetimeSales = lifetimeSales;
    }

    public String getHowToUse() {
        return howToUse;
    }

    public void setHowToUse(String howToUse) {
        this.howToUse = howToUse;
    }

    public String getSideEffects() {
        return sideEffects;
    }

    public void setSideEffects(String sideEffects) {
        this.sideEffects = sideEffects;
    }

    public MedicineGroup getMedicineGroup() {
        return medicineGroup;
    }

    public void setMedicineGroup(MedicineGroup medicineGroup) {
        this.medicineGroup = medicineGroup;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Medicine{" +
                "medicineId='" + medicineId + '\'' +
                ", medicineName='" + medicineName + '\'' +
                ", inStock=" + inStock +
                ", lifetimeSupply='" + lifetimeSupply + '\'' +
                ", lifetimeSales='" + lifetimeSales + '\'' +
                ", howToUse='" + howToUse + '\'' +
                ", sideEffects='" + sideEffects + '\'' +
                ", price=" + price +
                ", medicineGroup=" + medicineGroup +
                '}';
    }
}
