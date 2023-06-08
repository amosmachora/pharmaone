# Pharmaone Fullstack Application

This is a full-stack pharmacy management application that consists of a frontend written in React and a backend written in Java with the Spring framework.

## Acknowledgements

- [Koushik Kothagal](https://www.linkedin.com/in/koushikkothagal/)
- [Kevin Bowersox](https://www.linkedin.com/in/kevin-bowersox-0307b08/)

## Authors

- [@amohprince](https://github.com/AmohPrince)

![Pharmaone Logo](https://pharmaone.al/wp-content/uploads/2021/10/logo_pharma_one.png)

## 🚀 About Me

I'm a full-stack developer experienced in working with various technologies.

Please consider checking out my other projects as well. 🤗

## Installation

The backend application is hosted on AWS and serves data to the frontend application. You can access the frontend application through the following URL: [Pharmaone Frontend](http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/)

## Backend Endpoints

The backend provides the following endpoints:

- **/getallmedicine**: Get a list of medicines.
- **/getbygroupid/{groupId}**: Get a list filtered by group ID.
- **/getnumberofmedicineingroup/{groupId}**: Get the number of medicines in a certain group.
- **/getsinglemedicine/{medicineId}**: Get data about a single medicine.
- **/addMedicine**: Add medicine to the database.
- **/modifymedicine/{medicineId}**: Update medicine information.
- **/deletemedicine/{medicineId}**: Delete medicine.
- **/changeMedicineGroup/{medicineId}/{groupId}**: Change medicine group.
- **/sellMedicine/{medicineId}**: Make a sale.
- **/getallgroups**: Get a list of all medicine groups.
- **/addNewGroup**: Create a new medicine group.
- **/deletegroup/{groupId}**: Delete a certain group.
- **/getListOfSales**: Get a list of sales.
- **/suppliers/getAllSuppliers**: Get a list of suppliers.
- **/getAllUsers**: Get a list of users.

The data used by the backend is exclusively in JSON format.

You can try out the API by accessing the endpoints that do not require parameters, for example:

- [Get All Medicines](http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getallmedicine)
- [Get All Groups](http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getallgroups)
- [Get All Users](http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/getAllUsers)

## Frontend Features

The frontend application written in React includes the following features:

- Collapsible menus
- Mobile responsiveness
- Cross-platform compatibility

## Learning Resources

If you're interested in learning more about the technologies used in this project, the following resources can be helpful:

- [IPL Dashboard Spring-boot and React](https://www.youtube.com/watch?v=aL1oP4GJR7M&list=PLqq-6Pq4lTTa8V613TZhGq4o8hSgkMGQ0)
- [Java Collections](https://www.linkedin.com/learning/learning-java-collections)
- [Learning Spring with Spring Boot](https://www.linkedin.com/learning/learning-spring-with-spring-boot-2019)
- [Spring Data](https://www.linkedin.com/learning/spring-spring-data-2)
- [Figma Design File](<https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A550>)

## Links

- [Portfolio](http://amosmachora.vercel.app)
- [LinkedIn](https://www.linkedin.com/in/amos-machora)
- [Twitter](https://twitter.com/amos_machora)
