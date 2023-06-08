package com.saludos.pharmaone.repositories;

import com.saludos.pharmaone.entities.Suppliers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuppliersRepository extends JpaRepository<Suppliers , String> {
}
