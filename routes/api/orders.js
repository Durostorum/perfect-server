const router = require("express").Router();
const db = require("../../models/");

//path ecuals /api/orders
router.route("/:id").put(function (req, res) {
  let { order } = req.body;
  let orderArr = [];
  if (order.length > 0) {
    for (let i = 0; i < order.length; i++) {
      orderArr.push(order[i]._id);
    }
    db.Orders.findOneAndUpdate(
      { userId: req.params.id },
      {
        $set: { latestOrder: orderArr },
        $push: { orderHistory: { $each: orderArr, $position: 0 } },
      },
      { upsert: true }
    ).then((response) => {
      console.log("we found it", response);
    });
  } else {
    res.sendStatus(404);
  }
});

// path for /api/order/history
router.route("/history/latest/:userId").get((req, res) => {
  const userId = req.params.userId;
  db.Orders.findOne({ userId })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
