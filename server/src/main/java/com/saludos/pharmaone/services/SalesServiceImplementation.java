package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.Sales;
import com.saludos.pharmaone.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SalesServiceImplementation implements SalesService {
    @Autowired
    SalesRepository salesRepository;

    @Override
    public List<Sales> findListOfSales() {
        return  salesRepository.findAll();
    }
}
