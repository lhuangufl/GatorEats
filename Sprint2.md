# Spring 2 Progress

## Frontend

### Spring 2 Summary

#### Hongru Chu

- Propose low-level design of project and organize meeting to sync progress and set WIP deadline. Design doc: [GatorEats Project Design](https://docs.google.com/document/d/1U9dxFmZlN663R-g2jjvYWd-rHoPPS9GqP7CLbtSoCbg/edit?usp=sharing)
- Refactor flat frontend package layout to use components-sceens based development and add merchant/customer version development workflow, adjust home page and routes.
- Add Bootstrap to unify UI component and add authentication based Navigation Bar system. Add navigation and search bar after login.
- Add order page to view order history of customer.
- Add shopping cart page to view items in the order and checkout. Integration with Stripe are under development.
- Add user profile page to allow customer edit information and update preference.
- Add payment page to add new payment method to user. Will unify with Stripe interation system soon.
- (WIP) Adding unit test using Cypress to order, checkout, shopping card, user profile and payment components.

#### Tinghui

- Update homepage to add feature for deliver signup and merchant signup. Add restaurant signup page.
- Setup routes system to integrate authentication, search functionality.
- Add restaurant page and restaurant search result page to allow user view nearby restaurant or search restaurant by location.
- Add restaurant home page to allow user view menu and add item to shopping cart.
- Add integration for restuarant, search, merchant homepage, item and menu.
- Setup Cypress Unit test system.
- Add unit test to authentication, search functionality and restaurant component.
- Integrated signin and signup page with backend api.

### Demo

Phase 2 Demo:
[![Spring 2 Frontend Demo](https://img.youtube.com/vi/MIfhSSaTvnI/maxresdefault.jpg)](https://youtu.be/MIfhSSaTvnI)

### Frontend routes

#### `/`: home page before authentication

<img width="1260" alt="Screen Shot 2022-03-04 at 11 12 23 PM" src="https://user-images.githubusercontent.com/97488243/156867391-bb2a1fd3-2232-4a84-8604-51e98f7769ee.png">

#### `/signup`: register

<img width="1254" alt="Screen Shot 2022-03-04 at 11 12 38 PM" src="https://user-images.githubusercontent.com/97488243/156867433-4a247118-3c1f-466c-8c53-e8a9e8b54676.png">

#### `/signin`: login

<img width="1257" alt="Screen Shot 2022-03-04 at 11 12 45 PM" src="https://user-images.githubusercontent.com/97488243/156867421-72cc7b73-90d8-42d3-87ca-716ad10fe9b0.png">

#### `/home`: home page after authentication

<img width="1256" alt="Screen Shot 2022-03-04 at 11 13 00 PM" src="https://user-images.githubusercontent.com/97488243/156867437-cb09cebb-bed7-45d1-97a0-a7bd626c0cbf.png">

#### `/restaurant`: restaurant list page

<img width="1254" alt="Screen Shot 2022-03-04 at 11 13 07 PM" src="https://user-images.githubusercontent.com/97488243/156867453-53d9c156-ff3b-4550-bd1e-de8c6506e7dc.png">

#### `/restaurant_results/:address`: search result of restaurant list

<img width="1354" alt="Screen Shot 2022-03-04 at 11 23 06 PM" src="https://user-images.githubusercontent.com/97488243/156867502-cc883407-35d4-4ffd-a7d5-6a8cd3ce3674.png">

#### `/restaurant_menu/:restaurant`: restaurant home page and menu

<img width="1463" alt="Screen Shot 2022-03-04 at 11 16 31 PM" src="https://user-images.githubusercontent.com/97488243/156867519-2c633939-d599-4eda-9a09-991fafaf45a2.png">

#### `/orders`: history order page

<img width="1471" alt="Screen Shot 2022-03-04 at 11 16 42 PM" src="https://user-images.githubusercontent.com/97488243/156867527-2fe78aaa-732c-4e99-84b3-08d764cb2cd5.png">

#### `/cart`: shopping cart page

<img width="1461" alt="Screen Shot 2022-03-04 at 11 16 50 PM" src="https://user-images.githubusercontent.com/97488243/156867543-51e532fb-9259-4e64-94b4-a2084f059059.png">

#### `/profile`: user profile and setting page

<img width="1470" alt="Screen Shot 2022-03-04 at 11 17 10 PM" src="https://user-images.githubusercontent.com/97488243/156867564-5b73e3fc-d9dd-42b1-be91-08266ad468d4.png">

#### `/payment`: payment method page

<img width="1365" alt="Screen Shot 2022-03-04 at 11 17 22 PM" src="https://user-images.githubusercontent.com/97488243/156867574-25ed54b4-1b0b-483e-9a8f-42fe6ecaed7f.png">

#### Integration
<img width="569" alt="Screen Shot 2022-03-04 at 23 53 57" src="https://user-images.githubusercontent.com/60279540/156868545-34b53de8-69c7-4e99-8f42-dfff41581ed8.png">

#### cypress test
<img width="1438" alt="Screen Shot 2022-03-04 at 23 54 47" src="https://user-images.githubusercontent.com/60279540/156868571-a86274c2-73c7-4771-8efe-fab7c9ba8373.png">


## Backend
