# Pharmaone Backend

A fullstack application for a pharmacy management application

## Acknowledgements

- [Koushik Kothagal](https://www.linkedin.com/in/koushikkothagal/)
- [Kevin Bowersox](https://www.linkedin.com/in/kevin-bowersox-0307b08/)

## Authors

- [@amohprince](https://github.com/AmohPrince)

![Logo](https://pharmaone.al/wp-content/uploads/2021/10/logo_pharma_one.png)

## 🚀 About Me

I'm a full stack developer...
Please consider giving any of my other projects a look 🤗

## Installation

I have hosted the backend application on aws. The application serves data to a react application
hosted here
http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/

## Endpoints

**/getallmedicine** -> get a list of medicines  
**/getbygroupid/{groupId}** -> get list filtered by group groupId  
**/getnumberofmedicineingroup/{groupId}** -> get number of medicine in a certain group  
**/getsinglemedicine/{medicineId}** -> get data about a single medicine  
**/addMedicine** -> add medicine to the database  
**/modifymedicine/{medicineId}** -> update medicine info  
**/deletemedicine/{medicineId}** -> delete medicine  
**/changeMedicineGroup/{medicineId}/{groupId}** -> change medicine group  
**/sellMedicine/{medicineId}** -> make a sale  
**/getallgroups** -> get a list of getallgroups  
**/addNewGroup** -> create a new medicine group  
**/deletegroup/{groupId}** -> delete a certain group  
**/getListOfSales** -> get list of sales  
**/suppliers/getAllSuppliers** -> get list of suppliers  
**/getAllUsers** -> get list of users

The data used is exclusively in **JSON**

To try out the api try hitting the endpoints that do not require parameters e.g  
http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getallmedicine  
http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getallgroups  
http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getAllUsers

## Learning Resources

- [IPL Dashboard Spring-boot and react](https://www.youtube.com/watch?v=aL1oP4GJR7M&list=PLqq-6Pq4lTTa8V613TZhGq4o8hSgkMGQ0)
- [Java Collections](https://www.linkedin.com/learning/learning-java-collections)
- [Learning Spring with spring-boot](https://www.linkedin.com/learning/learning-spring-with-spring-boot-2019)
- [Spring Data](https://www.linkedin.com/learning/spring-spring-data-2)
- [Figma Design file](<https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A550>)
