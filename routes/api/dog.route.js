module.exports = function (router) {

    const dogs = require('../controller/dog.controller.js');

    // Create a new Dog
    router.post('/api/dogs', dogs.create);

    // Retrieve all Dog
    router.get('/api/dogs', dogs.findAll);

    // Retrieve a single Dog by Id
    router.get('/api/dogs/:dogId', dogs.findById);

    // Retrieve all dogs by breed
    router.get('api/dogs/:dogBreed', dogs.findBydogBreed);

    // Retrieve all dogs by dogAge
    router.get('api/dogs/:dogAge', dogs.findBydogAge);

    // Retrieve all dogs by activityLevel
    router.get('api/dogs/:activityLevel', dogs.findByactivityLevel);

    // Retrieve all dogs by coatLength
    router.get('api/dogs/:coatLength', dogs.findBycoatLength);


    // Retrieve all dogs by specialNeeds
    router.get('api/dogs/:specialNeeds', dogs.findByspecialNeeds);

    // Retrieve all dogs by favorite
    router.get('api/dogs/:favorite', dogs.findByfavorite);


    // Update a Dog with Id
    router.put('/api/dogs/:dogId', dogs.update);

    // Delete a Customer with Id
    router.delete('/api/dogs/:dogId', dogs.delete);
}