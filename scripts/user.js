const user = [
  {
    provider: "myself",
    username: "G",
    facebookId: "12312",
  },
];

module.exports = function (db) {
  db.User.remove({})
    .then(() => db.User.collection.insert(user))
    .then((data) => {
      console.log(data.result.n + " records were inserted");
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
