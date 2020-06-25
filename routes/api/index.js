const router = require("express").Router();
const foodRoutes = require("./food");
const orderRoutes = require("./orders");
const menuRoutes = require("./menu");
const path = require("path");

// Food Routes
router.use("/foodpage", foodRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
