const express = require ('express');
const router = express.Router();


// GET api/users/currentUser, private, uses JWT
router.get('/', (req, res) => res.send("User Route"));


module.exports = router;