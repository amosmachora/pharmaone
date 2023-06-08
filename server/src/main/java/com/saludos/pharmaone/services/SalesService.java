package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.Sales;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SalesService {
    public List<Sales> findListOfSales();
}
