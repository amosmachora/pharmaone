package com.saludos.pharmaone.entities;

import javax.persistence.*;


@Entity
@Table
public class MedicineGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int groupId;
    String groupName;
    String groupDescription;
    

    public MedicineGroup () {

    }

    public MedicineGroup(int groupId, String groupName, String groupDescription) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupDescription = groupDescription;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupDescription() {
        return groupDescription;
    }

    public void setGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
    }

    @Override
    public String toString() {
        return "MedicineGroup{" +
                "groupId=" + groupId +
                ", groupName='" + groupName + '\'' +
                ", groupDescription='" + groupDescription + '\'' +
                '}';
    }
}
