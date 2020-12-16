const express = require ('express');
const axios = require('axios');
const user = require('../controller/user');
const adopter = require('../controller/adopter');
const router = express.Router();


module.exports = function (router) {

// GET api/adopters/currentUser, private, uses JWT
    router.get('/currentUser', async (req, res) => {
        try {
            const adopterProfile = await Adopter.findOne({
//Get current user's id after login   
                user: req.user.id
        });
        console.log(user.id);
        if (!adopter) {
    //redirect to create a profile
            return res.status(400).json({ msg: 'There is no profile for this user' });
        } 
    //if there is a profile, populate the profile fields from the adopter model
        res.json(adopter).populate('adopter', [/*array of adopter info for profile*/]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// POST api/adopters, create adopter profile, private
router.post('/', async (req, res) => {
    const {
        date,
        dog,
        name,
        address,
        city,
        state,
        zip,
        phone,
        altPhone,
        email,
        adultsResiding,
        childrenResiding,
        agreement,
        ownRent,
        landlord,
        homeDescription,
        backyard,
        fence,
        fenceHeight,
        experience,
        experienceDescription,
        petSurrender,
        currentPet,
        currentPetDescription,
        hoursAlone,
        hoursTogether,
        dogKept,
        dogSleep,
        dogTraining,
        vet,


    }
});

}
