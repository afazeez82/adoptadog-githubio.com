module.exports = function(router) {
 
    const dogs = require('../controller/dog.controller.js');
 
    // Create a new Dog
    router.post('/api/dogs', dogs.create);
 
    // Retrieve all Dog
    router.get('/api/dogs', dogs.findAll);
 
    // Retrieve a single Dog by Id
    router.get('/api/dogs/:dogId', dogs.findById);
 
    // Update a Dog with Id
    router.put('/api/dogs/:dogId', dogs.update);
 
    // Delete a Customer with Id
    router.delete('/api/dogs/:dogId', dogs.delete);
}