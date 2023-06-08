package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.User;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public List<User> getListOfUsers();
}
