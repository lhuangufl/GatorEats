# Sprint 4 progress
## Frontend
#### Tinghui Zhang
- Integrated user profile, and update profile
<img width="1440" alt="Screen Shot 2022-04-20 at 23 01 14" src="https://user-images.githubusercontent.com/60279540/164363207-283bd8c2-b8ca-4c46-ad3d-c11ff8330314.png">

- Integrated restaurant profile and update.
<img width="1440" alt="Screen Shot 2022-04-20 at 23 02 21" src="https://user-images.githubusercontent.com/60279540/164363324-c29c4755-eae9-438c-94d3-50a28944799d.png">

- cypress test cases for frontend.


## Backend
#### Guanglong Zhang
- stripe payment and unit test
#### Endpoints
| endpoint                      | method | body                                           | description       |
|-------------------------------|--------|------------------------------------------------|-------------------|
| /api/order                    | DELETE | {"orderId":1,"ownerId":1}                      | Delete order |
| /api/order                    | GET    |                                                | List orders  |
| /api/checkout	                | POST	 |                                                |   checkout   |
