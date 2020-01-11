DROP DATABASE IF EXISTS`da_burger_db`;
CREATE DATABASE IF NOT EXISTS`da_burger_db`;

USE`da_burger_db`;

CREATE TABLE IF NOT EXISTS`items`(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    eaten BOOLIAN false,
    PRIMARY KEY(id)
);