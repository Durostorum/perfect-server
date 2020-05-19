module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
  },
  LoggedIn: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  },
};
