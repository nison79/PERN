-- for help \?

--list databases  \l

--create databases  CREATE DATABASE <name>

-- uuid CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--list all tables   \d <nameof table>

CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4 (),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    PRIMARY KEY (user_id),
    IP TEXT,
    start_at TIME NOT NULL,
    end_at TIME NOT NULL
);




CREATE TABLE users (
  id INT,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  IP VARCHAR(50),
  time_in TIMESTAMP,
  time_out TIMESTAMP,
  places_visits VARCHAR
);


INSERT INTO users (first_name,last_name)
VALUES ("george","nikoglou");

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	ip VARCHAR(255) ,
	name VARCHAR(255),
  time_in TIMESTAMP,
  time_out TIMESTAMP,
  places_visits VARCHAR,
  email VARCHAR(50)
);

ALTER TABLE users
ADD COLUMN email VARCHAR ,
ADD COLUMN time_in DATE ,
ADD COLUMN time_out DATE ,
ADD COLUMN places_visits VARCHAR ;



INSERT INTO users(id,ip,name,time_in,time_out,places_visits,email) VALUES (1,'127.1.1.1','george',NOW(),NOW(),'home','georgenison@gmail.com');


UPDATE users SET name = 'Alekos' , email='alek@yahoo.com' WHERE id =1;

DELETE FROM users WHERE id = 2;