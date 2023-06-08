package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.Suppliers;
import com.saludos.pharmaone.repositories.SuppliersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SupplierServiceImplementation implements SupplierService{

    @Autowired
    SuppliersRepository suppliersRepository;

    @Override
    public List<Suppliers> getAllSuppliers() {
        return suppliersRepository.findAll() ;
    }
}
