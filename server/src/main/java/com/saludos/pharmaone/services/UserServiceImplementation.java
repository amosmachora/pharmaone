package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.User;
import com.saludos.pharmaone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserServiceImplementation implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public List<User> getListOfUsers() {
        return userRepository.findAll();
    }
}
