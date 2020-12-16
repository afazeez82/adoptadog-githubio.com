const db = require('../config/config.js');
const Dog = db.dog;

// Post a Dog
exports.create = (req, res) => {	
	// Save to MySQL database
	Dog.create({  
	  dogName: req.body.dogName,
	  dogImage: req.body.dogImage,
	  gender: req.body.gender,
      dogBreed: req.body.dogBreed,
      coatLength: req.body.coatLength,
      activityLevel: req.body.activityLevel,
      specialNeed: req.body.specialNeed,
      briefBio: req.body.briefBio
	}).then(dog => {		
		// Send created Dog to client
		res.send(dog);
	});
};
 
// FETCH all Dogs
exports.findAll = (req, res) => {
	Dog.findAll(req.query).then(dog => {
	  // Json dog
	  res.json(dog);
	});
};

// Find a Dog by Id
exports.findById = (req, res) => {	
	Dog.findById(req.params.dogId).then(dog => {
		res.send(dog);
	})
};
 
// Update a Dog
exports.update = (req, res) => {
	const id = req.params.dogId;
	Dog.update( { 
        dogName: req.body.dogName, 
        gender: req.body.gender, 
        dogBreed: req.body.dogBreed, 
        coatLength: req.body.coatLength,
        activityLevel: req.body.activityLevel,
        specialNeed: req.body.specialNeed,
        briefBio: req.body.briefBio
     }, 
					 { where: {id: req.params.dogId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a dog with id = " + id);
				   });
};
 
// Delete a Dog by Id
exports.delete = (req, res) => {
	const id = req.params.dogId;
	Dog.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a dog with id = ' + id);
	});
};