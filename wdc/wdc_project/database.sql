CREATE DATABASE 'database';

USE 'database';

CREATE TABLE system_admin (
    admins_email VARCHAR(127),
    password VARCHAR(127),
    PRIMARY KEY (admins_email)
);

CREATE TABLE users (
    users_email VARCHAR(127),
    password VARCHAR(127),
    last_name VARCHAR(63),
    first_name VARCHAR(63),
    PRIMARY KEY (users_email)
);

CREATE TABLE creating_trip (
    users_email VARCHAR(127),
    event_ID INT,
    FOREIGN KEY (users_email) REFERENCES users(users_email) ON DELETE SET NULL

);

