# Sprint 3 progress
## Frontend
#### Tinghui Zhang
- Improved the css and styling for the pages in frontend.
- Integrated signin and signup for both resturtant and customer.
- Integrated restaurant search result and food menu.
<img width="1369" alt="Screen Shot 2022-04-02 at 00 27 11" src="https://user-images.githubusercontent.com/60279540/161366237-75ac18e4-95e4-4951-bb2b-69a105204732.png">
<img width="1438" alt="Screen Shot 2022-04-02 at 00 24 49" src="https://user-images.githubusercontent.com/60279540/161366191-a3d51a34-899d-4e18-a18e-47626f1cd02a.png">
- Prevent visit for some pages while logged in/out.
- Added some test cases.
<img width="1440" alt="Screen Shot 2022-04-01 at 23 51 13" src="https://user-images.githubusercontent.com/60279540/161366144-d03576d4-53d3-4dce-987c-35402917b509.png">
<img width="1440" alt="Screen Shot 2022-04-01 at 23 51 13" src="https://user-images.githubusercontent.com/60279540/161366150-0da95987-c7b9-4807-be0b-9ca0368ce397.png">

#### Hongru Chu
- Unify frontend router API
  - user
    - `/user/signin/`
    - `/user/signup/`
    - `/user/home/`
    - `/user/orders/`
    - `/user/profile/`
    - `/user/payment/`
    - `/user/cart/`
  - merchant
    - `/merchant/signin/`
    - `/merchant/signup/`
    - `/merchant/home/`
    - `/merchant/orders/`
    - `/merchant/profile/`
    - `/merchant/payment/`
    - `/merchant/cart/`
  - general
    - `/search/:address`
    - `/restaurant/`
    - `/restaurant/:id`
- Setup merchant auth page and integrate with backend.
- Add Merchant home page, order page.
- Add payment, profile page.
- Investigate payment page using Stripe UI kits.

<img width="1173" alt="Screen Shot 2022-04-02 at 1 26 36 AM" src="https://user-images.githubusercontent.com/97488243/161367904-2148c8c0-b757-48ea-82a9-ae697dce087a.png">

<img width="1130" alt="Screen Shot 2022-04-02 at 1 27 02 AM" src="https://user-images.githubusercontent.com/97488243/161367913-4a5c9194-aa58-4155-8b47-f3d8158e5ef1.png">

<img width="1164" alt="Screen Shot 2022-04-02 at 1 27 15 AM" src="https://user-images.githubusercontent.com/97488243/161367924-6e530d38-2f8a-4b6f-9d15-b4fdeb91b9a4.png">

<img width="1218" alt="Screen Shot 2022-04-02 at 1 27 45 AM" src="https://user-images.githubusercontent.com/97488243/161367944-8de28ae4-2af8-430f-af89-ea25c43e2436.png">

<img width="1252" alt="Screen Shot 2022-04-02 at 1 28 39 AM" src="https://user-images.githubusercontent.com/97488243/161367967-40b49ce2-bcf5-41be-be6a-b1fd00544805.png">

## Backend
#### Lin Huang
- Implemented various endpoints as listed below
- Unit tests of various endpoints
- Integration of backend and database


#### Postgresql Credentials

	* Host: ec2-52-206-193-199.compute-1.amazonaws.com
	* Database: db63l3ukuv77j8
	* User: fqhmuqxpozwlin
	* Port: 5432
	* Password: fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315
	* URI: postgres://fqhmuqxpozwlin:fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315@ec2-52-206-193-199.compute-1.amazonaws.com:5432/db63l3ukuv77j8
	* Heroku CLI:heroku pg:psql postgresql-round-19031 --app gator-eats

Server is live on localhost:8081

#### Endpoints
| endpoint                      | method | body                                           | description       |
|-------------------------------|--------|------------------------------------------------|-------------------|
| /api/session                  | GET    |                                                | GET user session                    |
| /api/logout                   | GET    |                                                | GET user logout                     |
| /api/login                    | POST   | { email String, password String }              | login user                          |
| /api/vendorlogin              | POST   | { email String, password String }              | login restaurant                    |
| /api/register                 | POST   | { email String, password String, name String } | register new user                   |
| /api/restaurantbyzipcode      | GET    | {"owneremail", "name","zipcode"，"phone":}        | display List of Restaurant near a zip   |
| /api/createrestaurant         | POST   | {"owneremail","password"，"name","zipcode"，"phone":} | Register New Restaurant             |
| /api/addfoodmenuitem          | POST   | { ownerid String, price Float, name String }   | add food menu item                  |
| /api/getfoodmenu              | GET    | { owneremail String }                            | get menu associated with a restaurant     |



2. Example of Endpoints uses

```javascript
import axios from "axios";
axios.post("http://localhost:8081/api/login", {
        email: email,
        password: password,
      })
axios.post("http://localhost:8081/api/login", {
        name: name,
        email: email,
        password: password,
      })
```

3. Running backend locally
Clone this repository
Download and install [golang](https://golang.org)

Ensure you have `make` installed.

```bash
cd backend
go mod tidy
make build-run
```

This will start the go server & the react frontend.

4. Using docker
Ensure you have `docker` installed

```bash
make docker-build
make docker-run
```
#### Guanglong Zhang

 order crud
#### Endpoints
