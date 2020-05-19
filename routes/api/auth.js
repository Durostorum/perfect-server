const express = require("express");
const router = express.Router();
const passport = require("passport");

/* Session middleware */
const { isLoggedIn, LoggedIn } = require("../../config/forceinout");

router.get("/logout", LoggedIn, (req, res) => {
  req.logout();
  req.flash("success_alert", "We will miss you");
  res.redirect("/login");
});

/* facebook login */
router.get(
  "/auth/facebook",
  passport.authenticate("facebook"),
  passport.authorize("facebook", { scope: ["email"] }),
  LoggedIn
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3005/drinkfood",
    failureRedirect: "http://localhost:3005/login",
  }),
  LoggedIn
);

module.exports = router;
