const router = require("express").Router();
const db = require("../../models/");

// matches /api/foodPage
router.get("/", (req, res) => {
  db.FoodPairing.find({})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// matches /api/foodpage/:id
router.route("/:id").get(function (req, res) {
  db.Menu.findById(req.params.id)
    .then((dbModel) => {
      console.log("WE ARE GETTING HERe", dbModel);
      if (!req.session.passport.user) {
        res.send(dbModel);
      } else {
        res.send([dbModel, req.session.passport.user]);
      }
    })

    .catch((err) => res.status(422).json(err));
});

//fetches the menu

module.exports = router;
