const db = require("../../models");
module.exports = function (router) {
    // Create a new Dog
    router.post("/api/dog", (req, res) => {
        db.dog.create({
                dogName: req.body.dogName,
                dogImage: req.body.dogImage,
                gender: req.body.gender,
                dogBreed: req.body.dogBreed,
                coatLength: req.body.coatLength,
                activityLevel: req.body.activityLevel,
                specialNeed: req.body.specialNeed,
                briefBio: req.body.briefBio
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
      router.post("/api/dog/:id", (req, res) => {
        db.dog.update({
                dogName: req.body.dogName,
                gender: req.body.gender,
                dogBreed: req.body.dogBreed,
                coatLength: req.body.coatLength,
                activityLevel: req.body.activityLevel,
                specialNeed: req.body.specialNeed,
                briefBio: req.body.briefBio,
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