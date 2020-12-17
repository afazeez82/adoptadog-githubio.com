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

    },
*/
    {
        dogName: 'Thor',
        dogImage: 'https://image.freepik.com/free-photo/german-shorthaired-pointer-dog_100493-508.jpg',
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
        dogImage: ' https://i.pinimg.com/originals/7b/d1/51/7bd151c9c47784ddace30feb3c3b11fe.jpg',
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
        dogImage: 'https://images1.americanlisted.com/nlarge/bertram-shih-tzu-senior-adoption-rescue-americanlisted_109574383.jpg',
        dogAge: 'Senior',
        gender: 'Male',
        dogBreed: 'Shih Tzu',
        coatLength: 'Medium',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: 'His owner passed away and he has been transferred to multiple shelters.',
        favorite: false,


    },

    {
        dogName: 'Charlie',
        dogImage: 'https://lh3.googleusercontent.com/proxy/FP_cAW24DiXsM5bPOqDTa5W99opO8Gncry4KOpxbNuvt6Q-PHjgJsySGhR1mEzd2JnSPu7rfnvbg5tbh_xMeRXGeQyo5MCL7f-2wbRmyJwMdNgWqw5Xxcv3eDeKlg9Kvt701yvnUAHglaPYfeKFPMg',
        dogAge: 'Senior',
        gender: 'Male',
        dogBreed: 'Havanese',
        coatLength: 'Medium',
        activityLevel: 'Low',
        specialNeeds: 'Yes',
        briefBio: 'Charlie is a second-time rescue from Minneapolis, MN. He was adopted by a family, but unfortunately, they abused him so Charlie is looking for a safe place to call home.',
        favorite: false,


    },

    {
        dogName: 'Buddy',
        dogImage: 'https://barkpost.com/wp-content/uploads/2019/08/silky-terrier-favorite-dog-toys.jpg',
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
        dogImage: 'https://image.freepik.com/free-photo/funny-puppy-dog-border-collie-lying-couch-plaid-indoors-lovely-member-family-little-dog-home-warming-blanket-cold-fall-autumn-winter-weather-pet-animal-life-concept_80942-2550.jpg',
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
        dogImage: 'https://i.pinimg.com/originals/c7/45/22/c74522d5be49609deb32bc70d4b4594c.png',
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
        dogImage: 'https://i.pinimg.com/originals/38/df/d0/38dfd0aaacc5ceaa57a5bb95591d8167.jpg',
        dogAge: 'Puppy',
        gender: 'Male',
        dogBreed: 'Golden Doodle',
        coatLength: 'Short',
        activityLevel: 'High',
        specialNeeds: 'None',
        briefBio: ' Bailey is a good boy who just wants to be loved. He’s charming and has the cutest little features.',
        favorite: false,


    },

    {
        dogName: 'Bella',
        dogImage: 'https://www.aaronmaltesepuppy.com/images/672B2162-2.jpeg',
        dogAge: 'Senior',
        gender: 'Female',
        dogBreed: 'Maltese',
        coatLength: 'Short',
        activityLevel: 'Low',
        specialNeeds: 'None',
        briefBio: ' Despite being abandoned, she’s a very friendly little lady who is ready to find her forever home.',
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
