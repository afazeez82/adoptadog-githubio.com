var db = require("../../models");

module.exports = function (router) {

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

}