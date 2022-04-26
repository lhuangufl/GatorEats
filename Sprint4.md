# Sprint 4 progress
## Frontend
### Hongru Chu
- Add Stripe checkout page
- Update and integrate payment with Stripe mock API
- Process integration test for Stripe payment
- Add payment options including Card, Link Bank Account, Google Pay, Apple Pay, AliPay, WechatPay

### Demo of Stripe Payment
#### 1. Card Payment

<img width="1515" alt="Screen Shot 2022-04-21 at 1 12 14 AM" src="https://user-images.githubusercontent.com/97488243/164380578-830e9bb5-8d75-4867-be31-ecb949b4d547.png">
<img width="918" alt="Screen Shot 2022-04-21 at 1 17 13 AM" src="https://user-images.githubusercontent.com/97488243/164380427-f9217d34-16ed-4e4f-9e84-47dd3659af1c.png">
<img width="1516" alt="Screen Shot 2022-04-21 at 1 12 26 AM" src="https://user-images.githubusercontent.com/97488243/164380392-39dab38d-ce5a-4f44-b178-6fb6f6eb8ea6.png">
<img width="1444" alt="Screen Shot 2022-04-21 at 1 19 04 AM" src="https://user-images.githubusercontent.com/97488243/164380272-cfacf9cf-4e8b-4ada-a5ae-dc76901302c2.png">
<img width="1353" alt="Screen Shot 2022-04-21 at 1 18 19 AM" src="https://user-images.githubusercontent.com/97488243/164380785-17385bd2-6f8b-4091-bbe1-8e169b6baad3.png">

#### 2. Link Bank Account
<img width="1311" alt="Screen Shot 2022-04-21 at 1 22 57 AM" src="https://user-images.githubusercontent.com/97488243/164381098-d26ccc5d-953f-475d-9477-46f893d92cf0.png">
<img width="1393" alt="Screen Shot 2022-04-21 at 1 23 06 AM" src="https://user-images.githubusercontent.com/97488243/164381117-e66419d0-c976-44ec-ab54-cd92f337670a.png">
<img width="1384" alt="Screen Shot 2022-04-21 at 1 23 23 AM" src="https://user-images.githubusercontent.com/97488243/164381130-fbabd50d-e666-403d-9da4-b2be9307487f.png">
<img width="1360" alt="Screen Shot 2022-04-21 at 1 23 30 AM" src="https://user-images.githubusercontent.com/97488243/164381143-f37508d9-2b7c-4324-aeb0-b6749f5c5a31.png">
<img width="1440" alt="Screen Shot 2022-04-21 at 1 23 38 AM" src="https://user-images.githubusercontent.com/97488243/164381172-9ce9d526-34fe-4c30-8710-fd6e4c38d809.png">
<img width="1408" alt="Screen Shot 2022-04-21 at 1 24 17 AM" src="https://user-images.githubusercontent.com/97488243/164381188-43913799-1fcd-40dd-bfc7-75d986ff4dab.png">


#### 3. AliPay
<img width="1444" alt="Screen Shot 2022-04-21 at 1 19 53 AM" src="https://user-images.githubusercontent.com/97488243/164380868-97844747-7f8c-4bcc-a79e-0163b66d9863.png">
<img width="1344" alt="Screen Shot 2022-04-21 at 1 20 06 AM" src="https://user-images.githubusercontent.com/97488243/164380897-d5f176ae-3199-4511-9a46-2980c5c11cb9.png">
<img width="1359" alt="Screen Shot 2022-04-21 at 1 20 14 AM" src="https://user-images.githubusercontent.com/97488243/164380921-af9204bd-2c39-494e-8e91-da0c23eda7cb.png">
<img width="1658" alt="Screen Shot 2022-04-21 at 1 20 56 AM" src="https://user-images.githubusercontent.com/97488243/164380940-9de95f5d-2f05-4cb1-b4a4-dc457a026eeb.png">

#### 4. Wechat Pay
<img width="1276" alt="Screen Shot 2022-04-21 at 1 21 35 AM" src="https://user-images.githubusercontent.com/97488243/164381009-e1f5bebe-8b9c-4cd8-ae28-2f7849bb25ea.png">
<img width="1250" alt="Screen Shot 2022-04-21 at 1 21 45 AM" src="https://user-images.githubusercontent.com/97488243/164381036-7e4174e6-e5f1-4d0e-b84e-c54f54c116a3.png">

### Tinghui Zhang
- Integrated user profile, and update profile
<img width="1440" alt="Screen Shot 2022-04-20 at 23 01 14" src="https://user-images.githubusercontent.com/60279540/164363207-283bd8c2-b8ca-4c46-ad3d-c11ff8330314.png">

- Integrated restaurant profile and update.
<img width="1440" alt="Screen Shot 2022-04-20 at 23 02 21" src="https://user-images.githubusercontent.com/60279540/164363324-c29c4755-eae9-438c-94d3-50a28944799d.png">

- cypress test cases for frontend.


## Backend
#### Guanglong Zhang
- stripe payment 
- List and Delete order 
- Unit test
#### Endpoints
| endpoint                      | method | body                                           | description       |
|-------------------------------|--------|------------------------------------------------|-------------------|
| /api/order                    | DELETE | {"orderId":1,"ownerId":1}                      | Delete order |
| /api/order                    | GET    |                                                | List orders  |
| /api/checkout	                | POST	 |                                                |   checkout   |

#### Lin Huang
## Endpoints
| endpoint                      | method | body                                           | description       |
|-------------------------------|--------|------------------------------------------------|-------------------|
| /api/session                  | GET    |                                                | GET user session                    |
| /api/logout                   | GET    |                                                | GET user logout                     |
| /api/login                    | POST   | { email String, password String }              | login user                          |
| /api/vendorlogin              | POST   | { email String, password String }              | login restaurant                    |
| /api/register                 | POST   | { email String, password String, name String } | register new user                   |
| /api/restaurantbyzipcode      | GET    | {"owneremail", "name","zipcode"，"phone":}        | display List of Restaurant near a zip   |
| /api/createrestaurant         | POST   | {"owneremail","password"，"name","zipcode"，"phone"} | Register New Restaurant       |
| /api/addfoodmenuitem          | POST   | { ownerid String, price Float, name String }   | add food menu item                  |
| /api/getvendor                | GET    | { email String }                               | get a restaurant information        |
| /api/getuserprofile            | GET    | { email String }                               | get a user's profile information     |
| /api/updatevendor             | PUT    | {"owneremail","name","zipcode"，"phone","id"}   | update a restaurant profile        |
| /api/updateuserprofile         | PUT    | { name: String, email: String, id: String }    | update a user's profile   |
| /api/getfoodmenu              | GET    | { owneremail String }                          | get menu associated with a restaurant     |
