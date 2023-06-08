package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.Suppliers;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SupplierService {
    public List<Suppliers> getAllSuppliers();
}
