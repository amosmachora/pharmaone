package com.saludos.pharmaone.entities;


import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;


@Entity
@Table
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int salesId;

    Timestamp saleDate;

    @OneToOne
    User user;

    BigDecimal amount;

    @OneToOne
    Medicine medicine;

    public Sales () {

    }

    public Sales( User user, BigDecimal amount, Medicine medicine ,  Timestamp saleDate) {
        this.user = user;
        this.amount = amount;
        this.medicine = medicine;
        this.saleDate = saleDate;
    }

    public int getSalesId() {
        return salesId;
    }

    public void setSalesId(int salesId) {
        this.salesId = salesId;
    }

    public Timestamp getSaleDate() {
        return saleDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Medicine getMedicine() {
        return medicine;
    }

    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }
}
