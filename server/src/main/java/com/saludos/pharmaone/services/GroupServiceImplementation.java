package com.saludos.pharmaone.services;

import com.saludos.pharmaone.entities.MedicineGroup;
import com.saludos.pharmaone.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GroupServiceImplementation implements GroupService{

    @Autowired
    GroupRepository groupRepository;

    @Override
    public List<MedicineGroup> findAllGroups() {
        return groupRepository.findAll();
    }

    @Override
    public String addNewGroup(MedicineGroup group) {
        groupRepository.save(group);
        return "Added group " + group.getGroupName();
    }

    @Override
    public String deleteGroup(int groupId) {
        String returnMessage = "";
        try{
            groupRepository.deleteById(groupId);
            returnMessage = "Successfully deleted group with id " + groupId;
        }catch (EmptyResultDataAccessException e){
            returnMessage = "Already deleted!";
        }
        return returnMessage;
    }
}
