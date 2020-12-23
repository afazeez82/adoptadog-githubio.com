# FurEver Home Rescue

## About

We are a team of students who built a rescue website using MySQL/Sequelize and React.js. 

Front End:
Nasra Hassan
Caroline Pukenis

Back End:
Anees Azeez
Regan Murray
Isatou Sayang

## Starting the app locally

**Configure the MySQL database:**

- In config/config.js - replace the development username, password, and database name to match your local MySQL user information and application database

**Populating the MySQL database:**

 ```
npx sequelize-cli db:seed:all
 ```
 
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


