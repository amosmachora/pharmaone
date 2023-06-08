package com.saludos.pharmaone.controllers;

import com.saludos.pharmaone.entities.Suppliers;
import com.saludos.pharmaone.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = "https://pharmaone-frontend.vercel.app/")
public class SuppliersController {

    @Autowired
    SupplierService supplierService;

    @GetMapping("/suppliers/getAllSuppliers")
    public List<Suppliers> getAllSuppliers (){

        return supplierService.getAllSuppliers();
    }
}
