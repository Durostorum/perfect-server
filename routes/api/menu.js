const router = require("express").Router();

const { isLoggedIn } = require("../../config/forceinout");
// Matches with "/api/menu"
router.get("/drinkfood", (req, res) => {
  console.log("this comes from server", req.user);
  if (!req.user) {
    res.redirect("/");
  }
  res.send({ user: req.user.name, token: req.user.accessToken });
});

module.exports = router;
