const express = require ('express');
const router = express.Router();

// GET api/dogs
router.get('/', (req, res) => res.send("Dogs Route"));


module.exports = router;