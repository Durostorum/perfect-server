const express = require("express");
const router = express.Router();

router.get("/getuser", (req, res) => {
  if (!req.user) {
    res.redirect("/");
  }
  res.append("access_token", req.user.accessToken);
  res.send({ user: req.user.name });
});


// router.get("/api/logout", (req, res) => {
//   req.session.destroy();
//   req.logout();
//   // res.redirect("");
// });



module.exports = router;
