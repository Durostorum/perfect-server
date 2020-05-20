module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  },
  LoggedIn: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/drinkfood");
  },
};
