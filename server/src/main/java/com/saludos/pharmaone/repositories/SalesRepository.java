package com.saludos.pharmaone.repositories;

import com.saludos.pharmaone.entities.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepository extends JpaRepository<Sales, Integer> {
}
