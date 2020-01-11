USE`da_burger_db`;

INSERT INTO burgers(name, eaten) VALUES('Classic', true);
INSERT INTO burgers(name, eaten) VALUES('Impossible Burger', false);
INSERT INTO burgers(name, eaten) VALUES('Chicken Burger', false);
INSERT INTO burgers(name, eaten) VALUES('Bean Burger', true);

SELECT * from burgers;