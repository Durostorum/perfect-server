const router = require("express").Router();

// Matches with "/api/menu"
router.get("/drinkfood", (req, res) => {
  if (!req.user) {
    res.redirect("/");
  }
  res.append("access_token", req.user.accessToken);
  res.send({ user: req.user.name });
});

module.exports = router;
