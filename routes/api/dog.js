
const dog = require('/controllers/dogController');
module.exports = function (router) {

  

    // Create a new Dog
    router.post('/api/dog', dog.create);

    // Retrieve all Dog
    router.get('/api/dog', dog.findAll);

    // Retrieve a single Dog by Id
    router.get('/api/dog/:dogId', dog.findById);

    // Retrieve all dogs by breed
    router.get('api/dog/:dogBreed', dog.findBydogBreed);

    // Retrieve all dogs by dogAge
    router.get('api/dog/:dogAge', dog.findBydogAge);

    // Retrieve all dogs by activityLevel
    router.get('api/dog/:activityLevel', dog.findByactivityLevel);

    // Retrieve all dogs by coatLength
    router.get('api/dog/:coatLength', dog.findBycoatLength);


    // Retrieve all dogs by specialNeeds
    router.get('api/dog/:specialNeeds', dog.findByspecialNeeds);

    // Retrieve all dogs by favorite
    router.get('api/dog/:favorite', dog.findByfavorite);


    // Update a Dog with Id
    router.put('/api/dog/:dogId', dog.update);

    // Delete a Customer with Id
    router.delete('/api/dog/:dogId', dog.delete);
}