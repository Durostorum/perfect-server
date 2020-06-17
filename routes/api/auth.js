const express = require("express");
const router = express.Router();
const passport = require("passport");

/* Session middleware */
// const { isLoggedIn, LoggedIn } = require("../../config/forceinout");

/* facebook login */
router.get(
  "/auth/facebook",
  passport.authenticate("facebook"),
  passport.authorize("facebook", { scope: ["email"] })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3005/drinkfood",
    failureRedirect: "http://localhost:3005/login",
  })
);

// google login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3005/drinkfood",
    failureRedirect: "http://localhost:3005/login",
  })
);

router.get("/auth/slack", passport.authorize("Slack"));

router.get(
  "/auth/slack/callback",
  passport.authenticate("Slack", {
    successRedirect: "http://localhost:3005/drinkfood",
    failureRedirect: "http://localhost:3005/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
