
const router = require("express").Router();
//const dogController = require("dogController");



const db = require("../../models");

module.exports = function (router) {
    // Create a new Dog
    router.post("/api/dog", (req, res) => {
        db.dog.create({
                dogName: req.body.dogName,
                dogImage: req.body.dogImage,
                dogAge: req.body.dogAge,
                gender: req.body.gender,
                dogBreed: req.body.dogBreed,
                coatLength: req.body.coatLength,
                activityLevel: req.body.activityLevel,
                specialNeeds: req.body.specialNeeds,
                briefBio: req.body.briefBio,
                favorite: req.body.favorite,
                createdAt:Date.now,
            })
            .then(function(dog) {
                res.json(dog);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

     // Retrieve all Dog
     router.get("/api/dog", (req, res) => {
        db.dog.findAll({}).then(function(dbGetDog) {
                res.json(dbGetDog);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });
    // Retrieve all Dogs based on filter
    router.get("/api/dog/:dogBreed/:dogAge/:gender/:coatLength/:activityLevel/:specialNeeds", function(req, res) {
        db.dog
            .findAll({
                where: {
                    dogBreed: req.body.dogBreed,
                    dogAge: req.body.dogAge,
                    gender: req.body.gender,
                    coatLength: req.body.coatLength,
                    activityLevel: req.body.activityLevel,
                    specialNeeds: req.body.specialNeeds
                },
            })
            .then(function(dbGetDog) {
                res.json(dbGetDog);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    // router.get('/api/dog/:dogBreed/:dogAge/:gender/:coatLength/:activityLevel/:specialNeeds', function(req, res) {
    //     getFilterBasedValues(req.body.dogBreed, req.body.dogAge, req.body.gender, req.body.coatLength, req.body.activityLevel, req.body.specialNeeds);
    //   });




     // Retrieve a single Dog by Id

     router.get("/api/dog/:id", (req, res) => {
        db.dog.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbGetDog) {
                res.json(dbGetDog );
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

    // Delete a Dog with Id
    router.delete("/api/dog/:id", (req, res) => {
        db.dog.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbDeleteDog) {
                res.json(dbDeleteDog);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });

      // Update a Dog with Id
      router.put("/api/dog/:id", (req, res) => {
        db.dog.update({
                dogName: req.body.dogName,
                dogImage: req.body.dogImage,
                dogAge: req.body.dogAge,
                gender: req.body.gender,
                dogBreed: req.body.dogBreed,
                coatLength: req.body.coatLength,
                activityLevel: req.body.activityLevel,
                specialNeeds: req.body.specialNeeds,
                briefBio: req.body.briefBio,
                favorite: req.body.favorite,
                updatedAt: Date.now(),
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function(dbUpdateDog) {
                res.json(dbUpdateDog);
            })
            .catch(function(err) {
                res.status(500).json(err);
            });
    });


}