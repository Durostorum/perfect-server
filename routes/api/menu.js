const router = require("express").Router();

// Matches with "/api/menu"
router.get("/drinkfood", (req, res) => {
  console.log("this comes from server", req.user);
  if (!req.user) {
    res.redirect("/");
  }

  res.append("access_token", req.user.accessToken);
  res.send({ user: req.user.name });
});

module.exports = router;
