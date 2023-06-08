package com.saludos.pharmaone.repositories;

import com.saludos.pharmaone.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Integer> {

}
