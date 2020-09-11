# 🪒Captain Barber 🪒

Captain Barber is a portfolio project where you can search for barbershops in Amsterdam, see and write their reviews, rate them and add new barbershops. You can see the information about the services they provide so you can compare the prices and decide where to book your appointment. You can also find contact information for each barbershop and locate them on a map, so you always know where to go to get that clean cut.

## Table of contents:

- **[Goals for this Project](#goals-for-this-project)**
- **[User Stories](#user-stories)**
- **[Working Version](#working-version)**
- **[Database Diagram](#database-diagram)**
- **[Project-Board](#project-board)**
- **[Frontend](#frontend)**
- **[Endpoints](#endpoints)**
- **[Technologies Used](#technologies-used)**
- **[Git Version Control](#git-version-control)**
- **[Sample requests with axios](#sample-requests-with-axios)**
- **[Sample requests with httpie](#sample-requests-with-httpie)**
- **[Getting Started](#getting-started-instructions)**

## Goals for this Project

The goal of this project is to build a full-stack app, implementing backend and frontend technologies.
This is the backend of the project, where I am trying to:

- build a working prototype in two weeks
- apply the technologies I learned in Codaisseur Bootcamp
- showcase and document development skills using:
  - wireframes as Minimum Viable Product
  - data model design
  - kanban project approach
  - transparant and structured git version control

## User Stories

- As a page visitor, I can sign up and log in as a user. I must register before I can post reviews and like barbershops.
- As a page visitor, I am able see existing barbershops, their rates and reviews. I can see them sorted by their rates in a descending order.
- As a page visitor, I am able to see the name of the user, that posted a review and the time and date of when it was posted.
- As a page visitor, I am able to see the existing barbershops on a map and get to their detail page when clicking on them.
- As a logged in user, I am able to rate and review barbershops.
- As a barbershop owner, I can log in as a barbershop owner.
- As a logged in barbershop owner, I am able to add a new barbershop to the list of barbershops.

## Working Version

[Link to Captain Barber](https://captainbarber.netlify.app/)

## Database Diagram

[Link to the DB diagram](https://dbdiagram.io/d/5f4cf56d88d052352cb56e34)

## Project Board

[Link to the project board](https://github.com/RokPopov/CaptainBarber-client/projects/1)

## Frontend

[Link to the client side of the project](https://github.com/RokPopov/CaptainBarber-client)

## Endpoints

| Method | Path                        | Purpose                             | required parameters    | auth |
| ------ | --------------------------- | ----------------------------------- | ---------------------- | ---- |
| GET    | '/'                         | Test if your server is running      | none                   | no   |
| POST   | '/echo'                     | Test POST requests                  | none                   | no   |
| POST   | '/signup'                   | Create a new user and get a token   | email,                 | no   |
|        |                             |                                     | password,              |      |
|        |                             |                                     | firstName              |      |
|        |                             |                                     | lastName,              |      |
|        |                             |                                     | address,               |      |
|        |                             |                                     | phoneNum,              |      |
|        |                             |                                     | isOwner                |      |
| POST   | '/login'                    | Get a token with email & password   | email, password        | no   |
| GET    | '/me'                       | Get information of this user        | none                   | yes  |
| POST   | '/authorized_post_request'  | Test POST requests (token required) | none                   | yes  |
| GET    | '/barbershops/'             | Get information of this barbershop  | none                   | no   |
|        |                             | and it's locations                  |                        |      |
| GET    | '/barbershops/:id'          | Get information of this barbershop  | none                   | no   |
|        |                             | with it's locations and reviews     |                        |      |
|        |                             | with the relating user              |                        |      |
| PATCH  | '/barbershops/:id'          | Increment the rate property of      | none                   | no   |
|        |                             | barbershop model                    |                        |      |
| POST   | '/barbershops/addbarbershop | Create a new barbershop and a new   | title, haircut,        | yes  |
|        |                             | location                            | beardcut, combo,       |      |
|        |                             |                                     | haircutPrice,          |      |
|        |                             |                                     | beardcutPrice,         |      |
|        |                             |                                     | comboPrice, address,   |      |
|        |                             |                                     | longitude, latitude    |      |
|        |                             |                                     | website, email,        |      |
|        |                             |                                     | phoneNum, openingHours |      |
|        |                             |                                     | description, image     |      |
| POST   | '/barbershops/:id/review'   | Create a new review                 | time, content, userId, | yes  |
|        |                             |                                     | locationId             |      |
| GET    | '/map/'                     | Get information of all the          | none                   | no   |
|        |                             | barbershops and include their       |                        |      |
|        |                             | locations                           |                        |      |

## Technologies Used

- Express
- REST API
- Sequelize ORM
- PostgreSQL

## Git Version Control

In this project I try to implement solid version control:

- write clear commit messages
- name branches by features
- do pull requests with meaningful summaries

## Sample requests with axios

To demo making request to this server, some small script are included that make requests using `axios`

The scripts can be found in [/sampleRequests](https://github.com/RokPopov/CaptainBarber-server/tree/development/sampleRequests)

1. Make sure to follow the the setup in this readme first
2. cd sampleRequests
3. Run example requests

```
node hello.js
node echo.js
node signup.js
node login.js
node me.js
node authorizedPost.js
```

## Sample requests with httpie

To demo making request to this server, bash commands are included that make requests using `httpie`

They can found in [./sampleRequests/httpie.md](https://github.com/RokPopov/CaptainBarber-server/blob/development/sampleRequests/httpie.md)

## SETUP Getting started instructions

1. Clone the app

2. cd into your project

3. install dependencies

npm install

4. Run migrations & seed data

npm run initdev


Or run the commands seperately

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

5. start server with `nodemon` (recommended for development)

npm run dev


6. or start normally

npm start
