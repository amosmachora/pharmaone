USE ebdb;
CREATE TABLE `medicine_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(45) NOT NULL,
  `group_description` longtext,
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group__id_UNIQUE` (`group_id`),
  UNIQUE KEY `group_name_UNIQUE` (`group_name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `medicine` (
  `medicine_id` varchar(45) NOT NULL,
  `medicine_name` varchar(50) DEFAULT NULL,
  `in_stock` int DEFAULT NULL,
  `lifetime_supply` int DEFAULT NULL,
  `lifetime_sales` int DEFAULT NULL,
  `how_to_use` longtext,
  `side_effects` longtext,
  `medicine_group_group_id` int DEFAULT NULL,
  PRIMARY KEY (`medicine_id`),
  UNIQUE KEY `medicine_id_UNIQUE` (`medicine_id`),
  KEY `medicine_ibfk_2` (`medicine_group_group_id`),
  CONSTRAINT `medicine_ibfk_1` FOREIGN KEY (`medicine_group_group_id`) REFERENCES `medicine_group` (`group_id`),
  CONSTRAINT `medicine_ibfk_2` FOREIGN KEY (`medicine_group_group_id`) REFERENCES `medicine_group` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This is the medicine table.';

