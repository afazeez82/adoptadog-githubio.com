# FurEver Home Rescue
## Description

Thi's a full-stack application that runs React.js as front-end and Node-Express, Sequelize and MySQL as back-end. Use JawsDB for Heroku deployment.

As animal lovers and pet owners ourselves, we recognize that animal rescues play a vital role in our communities, serving many roles including rescuing animals in need, providing them shelter and medical care, and finding new homes for them where they will be cared for and loved. 
 As developers, we wanted to create a pet adoption app that would make the adoption process of rescue animals both easier and more enjoyable for adopters, fosters, and rescues alike.



## About

We are a team of students who built a rescue website using MySQL/Sequelize and React.js. 

Front End:
Nasra Hassan
Caroline Pukenis

Back End:
Anees Azeez
Regan Murray
Isatou Sayang


## Table of contents
- [Description](#description)
- [About](#about)
- [Installation](#installation)
- [Demo](#demo)

- [Technologies Used](#technologies-used)

## Installation
- Clone the Repository

Open your Bash/Terminal and type the following command: git clone git@github.com:afazeez82/adoptadog-githubio.com.git


## Starting the app locally

- Open the project folder in Visual Studio and install the dependencies. 

**Install the front and backend dependencies:**

 ```
npm install
 ```
 Wait for the install to finish than run the next line in the terminal.
 ```
cd client
npm install
 ```

**Configure the MySQL database:**

- In config/config.js - replace the development username, password, and database name to match your local MySQL user information and application database

**Populating the MySQL database:**

 ```
npx sequelize-cli db:seed:all
 ```
 
 

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Demo

You can see a working demo at [Heroku](https://secure-thicket-27671.herokuapp.com/)

![Home Rescue](client//public/images/dog_rescue.gif)

## Technologies Used
- Node.js
- Express
- MySQL
- Sequelize
- JawsDB
- React.js
- Redux
- Auth0
- Heroku


