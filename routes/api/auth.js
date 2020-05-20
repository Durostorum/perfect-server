const express = require("express");
const router = express.Router();
const passport = require("passport");

/* Session middleware */
const { isLoggedIn, LoggedIn } = require("../../config/forceinout");

// router.get("/logout", isLoggedIn, (req, res) => {
//   req.logout();
//   res.redirect("/login");
// });

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

module.exports = router;
