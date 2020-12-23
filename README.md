# FurEver Home Rescue
## Description



## About

We are a team of students who built a rescue website using MySQL/Sequelize and React.js. 

Front End:
Nasra Hassan
Caroline Pukenis

Back End:
Anees Azeez
Regan Murray
Isatou Sayang


## Table of contentss
- [Description](#description)
- [About](#about)
- [Installation](#installation)
- [Demo](#demo)

- [Technologies Used](#technologies-used)

## Installation
- Clone the Repository

Open your Bash/Terminal and type the following command: git clone git@github.com:afazeez82/adoptadog-githubio.com.git


## Starting the app locally

**Configure the MySQL database:**

- In config/config.js - replace the development username, password, and database name to match your local MySQL user information and application database

**Populating the MySQL database:**

 ```
npx sequelize-cli db:seed:all
 ```
 
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


