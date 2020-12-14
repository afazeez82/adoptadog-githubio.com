var db = require("../../models");
var path = require("path");
module.exports = function (router) {

// router.get('/', (req, res) => {
//     //res.send({ express: 'Hello From Express' });
//     res.render("Adopt");
//   });

  router.get("/", function (req, res) {
    res.render("Adopt");
  });

}