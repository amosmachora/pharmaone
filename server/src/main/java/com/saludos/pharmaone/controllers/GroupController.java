package com.saludos.pharmaone.controllers;


import com.saludos.pharmaone.entities.MedicineGroup;
import com.saludos.pharmaone.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(originPatterns = "https://pharmaone-frontend.vercel.app/", allowedHeaders = "*")
public class GroupController {
    @Autowired
    GroupService groupService;

    @GetMapping("/getallgroups")
    public List<MedicineGroup> getAllGroups(){
        return groupService.findAllGroups();
    }

    @PostMapping ("/addNewGroup")
    public String addNewGroup(@RequestBody MedicineGroup group){
        return groupService.addNewGroup(group);
    }

    @DeleteMapping("/deletegroup/{groupId}")
    public String deleteGroup(@PathVariable int groupId){
        return groupService.deleteGroup(groupId);
    }
}
