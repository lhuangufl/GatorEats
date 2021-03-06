##Backend Database

1.1 Create MySql instance on Google Cloud Platform

- Public IP: 35.224.175.177
- Connection Name: onyx-rainfall-337905:us-central1:cen5035-spring2022
- Default Port: 3306
- Username: gatoreats
- Password: 123456
- Instance IP Assignment: 0.0.0.0

  1.2 Local PostgreSQL Database for testing

- POSTGRES_USER=postgres
- POSTGRES_PASSWORD="123456"
- POSTGRES_DB=postgres
- SERVER_PORT=:8081

Server is live on :8081

2. Establish connection via MySQL WorkBench
   ![alt text](https://github.com/lhuangufl/GatorEats-CEN5035-Spring22/blob/master/MySQL%20Connection.png)

##Internal Endpoints

| endpoint      | method | body                                           | description                         |
| ------------- | ------ | ---------------------------------------------- | ----------------------------------- |
| /api/session  | GET    |                                                | GET user session                    |
| /api/login    | POST   | { email String, password String }              | login user                          |
| /api/register | POST   | { email String, password String, name String } | register new user                   |
| /api/home     | POST   | { }                                            | Homepage display List of Restaurant |

## Sprint1 Backend Demo

[Backend Demo#1 Click Me](https://www.youtube.com/watch?v=h68qS_seHmw "Backend Demo 1")

## Sprint1 Backend Demo

[Backend Demo#2 Click Me](https://www.youtube.com/watch?v=rm9NOgO3QOo&t=11s)

## Tinghui Zhang sprint 1

what I have done:

- 1. setted up mock backend server.
- 2. Initialized frontend project, and get the router of frontend works.
- 3. frontend home page.
- 4. frontend signup page with connected with mock backend.

Demo link:

[Click here for Tinghui's frontend demo](https://youtu.be/9xo_8fDS7_A)

## Hongru Chu sprint 1
1. setted up mock backend server.
2. frontend sifnin page with connected with mock backend.
[Click here for Hongru's frontend demo](https://www.youtube.com/watch?v=xx68cbNzL3Y&ab_channel=hongru)
