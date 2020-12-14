const router = require("express").Router();
const dogController = require("dogController");

module.exports = function () {
    router.route("/");
    // Create a new Dog
    router.post(
        dogController.create()
    );

     // Retrieve all Dog
     router.get(
         dogController.findAll()
     );
}