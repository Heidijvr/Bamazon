CREATE DATABASE `bamazon_db`;

USE `bamazon_db`;

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `department_name` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB ;

