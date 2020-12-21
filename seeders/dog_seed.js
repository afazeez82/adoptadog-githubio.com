'use strict'
const Sequelize = require('sequelize');
//const dog = require('../models/dog');


const adoptableDogs = [

/*    {
        dogName: '',
        dogImage: '',
        dogAge: '',
        gender: '',
        dogBreed: '',
        coatLength: '',
        activityLevel: '',
        specialNeeds: '',
        briefBio: '',
        favorite: '',

    },        */
    {
        dogName: 'Thor',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/gspProfile.jpg?raw=true',
        dogAge: 'Adult',
        gender: 'Male',
        dogBreed: 'Pointer',
        coatLength: 'Short',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: 'Thor was rescued from the woods with a few acquired survival skills/scars.',
        favorite: false,


    },

    {
        dogName: 'Ralph',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/pugProfile.jpg?raw=true',
        dogAge: 'Adult',
        gender: 'Male',
        dogBreed: 'Pug',
        coatLength: 'Short',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: 'His owner made the difficult decision that Chuck would be best suited to a new home, where he can continue to grow in a new environment.',
        favorite: false,      



    },

    {
        dogName: 'Teddy',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/shihTzuProfile.jpg?raw=true',
        dogAge: 'Senior',
        gender: 'Female',
        dogBreed: 'Shih Tzu',
        coatLength: 'Medium',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: 'His owner passed away and he has been transferred to multiple shelters.',
        favorite: false,


    },

    {
        dogName: 'Charlie',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/havaneseProfile.jpg?raw=true',
        dogAge: 'Senior',
        gender: 'Female',
        dogBreed: 'Havanese',
        coatLength: 'Medium',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: 'Charlie is a second-time rescue from Minneapolis, MN. He was adopted by a family, but unfortunately, they abused him so Charlie is looking for a safe place to call home.',
        favorite: false,


    },

    {
        dogName: 'Buddy',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/silkyProfile.jpg?raw=true',
        dogAge: 'Young',
        gender: 'Male',
        dogBreed: 'Silky Terrier',
        coatLength: 'Medium',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: 'From Chaska, MN. Scooby-Dooby-Doo! I like to cuddle, how ‘bout with you',
        favorite: false,


    },

    {
        dogName: 'JoJo',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/bcProfile.jpg?raw=true',
        dogAge: 'Young',
        gender: 'Female',
        dogBreed: 'Border Collie',
        coatLength: 'Long',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: 'Jojo  was left on her own, She was spotted at Harriet Island in St. Paul getting on and off the boats as numbers increased.',
        favorite: false,      



    },

    {
        dogName: 'Maxie',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/goldenProfile.jpg?raw=true',
        dogAge: 'Adult',
        gender: 'Female',
        dogBreed: 'Golden Retriever',
        coatLength: 'Long',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: 'She was found in St. Cloud, running in the middle of the road and She almost got run over.',
        favorite: false,


    },

    {
        dogName: 'Bailey',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/doodlePupProfile.jpg?raw=true',
        dogAge: 'Puppy',
        gender: 'Female',
        dogBreed: 'Golden Doodle',
        coatLength: 'Short',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: ' Bailey is a good boy who just wants to be loved. He’s charming and has the cutest little features.',
        favorite: false,


    },

    {
        dogName: 'Bella',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/malteseProfile.jpg?raw=true',
        dogAge: 'Senior',
        gender: 'Female',
        dogBreed: 'Maltese',
        coatLength: 'Short',
        activityLevel: 'Low',
        specialNeeds: 'None',
        briefBio: ' Despite being abandoned, she’s a very friendly little lady who is ready to find her forever home.',
        favorite: false,


    },
    {
        dogName: 'Herman',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/brussels.png?raw=true',
        dogAge: 'Adult',
        gender: 'Male',
        dogBreed: 'Brussels Griffon',
        coatLength: 'Medium',
        activityLevel: 'Normal',
        specialNeeds: 'None',
        briefBio: '',
        favorite: false,

    },
    {
        dogName: 'Coach',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/cattleProfile.jpg?raw=true',
        dogAge: 'Puppy',
        gender: 'Male',
        dogBreed: 'Australian Cattle Dog',
        coatLength: 'Short',
        activityLevel: 'High',
        specialNeeds: 'Yes',
        briefBio: '',
        favorite: false,

    }, 
    {
        dogName: 'Francine',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/couchPupProfile.jpg?raw=true',
        dogAge: 'Senior',
        gender: 'Female',
        dogBreed: 'Lab Mix',
        coatLength: 'Long',
        activityLevel: 'Low',
        specialNeeds: 'None',
        briefBio: '',
        favorite: false,

    }, 
    {
        dogName: 'Trixie',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/labPupProfile.jpg?raw=true',
        dogAge: 'Puppy',
        gender: 'Female',
        dogBreed: 'Labrador Retriever',
        coatLength: 'Short',
        activityLevel: 'Normal',
        specialNeeds: 'None',
        briefBio: '',
        favorite: false,

    }, 
    {
        dogName: 'Rosco',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/pittyProfile.jpg?raw=true',
        dogAge: 'Adult',
        gender: 'Male',
        dogBreed: 'American Pitbull Terrier',
        coatLength: 'Short',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: '',
        favorite: false,

    }, 
    {
        dogName: 'Shep',
        dogImage: 'https://github.com/caropukenis/adoptAdogImageRepo/blob/main/tripodProfile.jpg?raw=true',
        dogAge: 'Senior',
        gender: 'Male',
        dogBreed: 'German Shepherd Mix',
        coatLength: 'Medium',
        activityLevel: 'Normal',
        specialNeeds: 'Yes',
        briefBio: '',
        favorite: false,

    }, 
    
];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('dogs', adoptableDogs, {} )
},
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(dog, adoptableDogs, {});
  }
};
