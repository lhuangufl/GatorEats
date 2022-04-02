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

## Backend
#### Lin Huang
- Implemented various endpoints as listed below
- Unit tests of various endpoints
- Integration of backend and database
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
| /api/getfoodmenu              | POST   | { owneremail String }                            | get menu associated with a restaurant     |
| /api/order                    | POST   | {"orderId":1,"ownerId":1,"totalPrice":1}       | Create order |
| /api/order                    | PUT    | {"orderId":1,"ownerId":1,"totalPrice":1}       | Update order |
| /api/order                    | DELETE | {"orderId":1,"ownerId":1}                      | Delete order |
| /api/order                    | GET    |                                                | List orders  |


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
