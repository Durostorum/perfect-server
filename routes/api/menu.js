const router = require("express").Router();

const { isLoggedIn } = require("../../config/forceinout");
// Matches with "/api/menu"
router.get("/drinkfood", isLoggedIn, (req, res) => {
  console.log("this comes from server", req.user);
  res.send({ user: req.user });
});

module.exports = router;
