CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
 id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured INT(10),
  PRIMARY KEY(id)
);