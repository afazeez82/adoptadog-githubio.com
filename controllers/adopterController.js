const db = require('../config/db.config.js');
const Adopter = db.adopters;

//POST an adoption form
exports.create = (req, res) => {	
	// Save to MySQL database
	Adopter.create({  
        date: req.body.date,
        dogName: req.body.dogName,    
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        email: req.body.email,
        //please include names of all individuals residing in your house, relationship and ages
        individualsResiding: req.body.individualsResiding,
        agreement: req.body.agreement,
        ownRent: req.body.ownRent,
        landlord: req.body.landlord,
        //please include details about your yard, like does it have a fence as what height
        homeDescription: req.body.homeDescription,
        //please describe any previous experience owning pets
        experience: req.body.experience,
        petSurrender: req.body.petSurrender,
        //please include info about current pets, how many, ages, etc.
        currentPetDescription: req.body.currentPetName,
        hoursAlone: req.body.hoursAlone,
        hoursTogether: req.body.hoursTogether,
        dogKept: req.body.dogkept,
        dogSleep: req.body.dogSleep,
        dogTraining: req.body.dogTraining,
        vet: req.body.vet
	}).then(adopter => {		
		// Send created Adopter to db and populate items in adopter Profile
		res.json(adopter);
	});
};
 

//GET an adopter by Id
exports.findById = (req, res) => {	
	Adopter.findById(req.params.adopterId).then(adopter => {
		res.json(adopter);
	})
};
 
//UPDATE the adoption form
exports.update = (req, res) => {
	const id = req.params.adopterId;
	Adopter.update( { 
        date: req.body.date,
        dogName: req.body.dogName,    
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        email: req.body.email,
        //please include names of all individuals residing in your house, relationship and ages
        individualsResiding: req.body.individualsResiding,
        agreement: req.body.agreement,
        ownRent: req.body.ownRent,
        landlord: req.body.landlord,
        //please include details about your yard, like does it have a fence as what height
        homeDescription: req.body.homeDescription,
        //please describe any previous experience owning pets
        experience: req.body.experience,
        petSurrender: req.body.petSurrender,
        //please include info about current pets, how many, ages, etc.
        currentPetDescription: req.body.currentPetName,
        hoursAlone: req.body.hoursAlone,
        hoursTogether: req.body.hoursTogether,
        dogKept: req.body.dogkept,
        dogSleep: req.body.dogSleep,
        dogTraining: req.body.dogTraining,
        vet: req.body.vet
    }, 
					 { where: {id: req.params.adopterId} }
				   ).then(() => {
					 res.status(200).send("updated successfully adopter with id = " + id);
				   });
};
 
