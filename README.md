# GatorEats-CEN5035-Spring22

This is a web application for meal ordering online, similar to Uber eats.

This project will use Golang for banckend and React.js for frontend.

Team Member:

    Lin Huang,

    Guanglong Zhang,

    Tinghui Zhang,

    Hongru Chu,



1.1 Create MySql instance on Google Cloud Platform

*Host: ec2-52-206-193-199.compute-1.amazonaws.com
*Database: db63l3ukuv77j8
*User: fqhmuqxpozwlin
*Port: 5432
*Password: fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315
*URI: postgres://fqhmuqxpozwlin:fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315@ec2-52-206-193-199.compute-1.amazonaws.com:5432/db63l3ukuv77j8
*Heroku CLI:heroku pg:psql postgresql-round-19031 --app gator-eats

Server is live on localhost:8081

1. Establish connection via pgAdmin

2. SQL Create Tables

```
CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name serial NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL default current_timestamp,
    updated_at TIMESTAMP NOT NULL default current_timestamp
);

CREATE TABLE IF NOT EXISTS restaurants
(
    restID serial PRIMARY KEY,
	ownerID serial NOT NULL,
	password text NOT NULL,
    name text NOT NULL,
    zipcode text NOT NULL,
	phone text NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS menuItem
(
    itermID serial PRIMARY KEY,
	ownerID serial NOT NULL,
	price integer NOT NULL,
    itemName text NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS gatorOrder
(
    orderID serial PRIMARY KEY,
	ownerID serial NOT NULL,
	totalPrice integer NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

3. Home, Login and Register

## Endpoints
| endpoint                      | method | body                                           | description       |
|-------------------------------|--------|------------------------------------------------|-------------------|
| /api/session                  | GET    |                                                | GET user session                    |
| /api/logout                   | GET    |                                                | GET user logout                     |
| /api/login                    | GET    | { email String, password String }              | login user                          |
| /api/register                 | POST   | { email String, password String, name String } | register new user                   |
| /api/restaurantbyzipcode      | GET    | {"owneremail", "name","zipcode"，"phone":}        | display List of Restaurant near a zip   |
| /api/createrestaurant         | POST   | {"owneremail","password"，"name","zipcode"，"phone":} | Register New Restaurant             |
