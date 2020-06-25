const express = require("express");
const router = express.Router();
const passport = require("passport");
const genPassword = require("../../config/passwordUtils").genPassword;
// const isAuth = require("../../config/forceinout");

router.post(
  "/api/register",
  passport.authenticate("local", {
    failureRedirect: "/api/register",
    successRedirect: "/api/menu/drinkfood",
  })
);

router.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  //   const saltHash = genPassword(password);
  //   const salt = saltHash.salt;
  //   const hash = saltHash.hash;
  console.log("this is from register", req.body);
  //   const newUser = new User({
  //     name,
  //     email,
  //     provider: "localStrategy",
  //     password,
  //   });
  //   newUser
  //     .save()
  //     .then((user) => {
  //       console.log(user);
  //       // res.redirect("/drinkfood");
  //     })
  //     .catch((err) => console.log(err));

  //   UserModel.findOne({ email }).then((user) => {
  //     // if (user) {
  //     //   res.send({ msg: "Email already exists" });
  //     // } else {
  //     res.send(user);
  //     //   }
  //   });
});

// router.get("/api/logout", (req, res) => {
//   req.session.destroy();
//   req.logout();
//   // res.redirect("");
// });

module.exports = router;
