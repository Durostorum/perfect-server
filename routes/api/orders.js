const router = require("express").Router();
const db = require("../../models/");

//path ecuals /api/orders
router.route("/:id").put(function (req, res) {
  console.log("p u t t he bo dy", req.query);
  console.log("p u t t he bo dy", req.body);
  console.log("p u t t he bo dy", req.params);
  // db.User.findOne({ _id: req.session.passport.user }).then((response) => {
  //   console.log("we found it", response);
  // });
  //   .then((dbModel) => console.log(dbModel))
  //   .catch((err) => res.status(422).json(err));
});
module.exports = router;
