package com.saludos.pharmaone.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saludos.pharmaone.entities.User;
import com.saludos.pharmaone.services.UserService;


@RestController
@CrossOrigin(originPatterns = "https://pharmaone-frontend.vercel.app/")
public class UserController {
    @Autowired
    UserService userService;
    
    @GetMapping("/getAllUsers")
    public List<User> getAllPharmacyUsers(){
        return userService.getListOfUsers();
    }

    
}
