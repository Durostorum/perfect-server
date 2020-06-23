const router = require("express").Router();
const foodRoutes = require("./food");
const userRoutes = require("./user");
const orderRoutes = require("./orders");
const menuRoutes = require("./menu");
const path = require("path");
// // Menu routes
// router.use("/menu", vsRoutes);

// Food Routes
router.use("/foodpage", foodRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);
router.use("/", userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// // Drinks Routes
// router.use("/", drinksRoutes);

module.exports = router;
