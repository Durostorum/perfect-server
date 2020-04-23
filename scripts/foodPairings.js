const foodPairings = [
  {
    _id: 1,
    name: "Burgers & Sandwiches",
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2019/05/Marinated-Portobello-Mushroom-Burgers-dressed-front.jpg",
    description: "View different sandwiches",
    apetizers: [9, 10, 9],
    mainCourses: [11, 12, 15],
    desserts: [13, 14],
    drinks: [1, 2, 3],
    moreApps: [10, 9, 10],
    moreDrinks: [4, 5, 6, 7, 8],
    moreMain: [16, 17, 18],
    moreDesserts: [14, 13, 14],
  },
  {
    _id: 2,
    name: "Steak",

    image:
      "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Steak_Frites_V10.jpg",
    description: "View dishes that contain steak",
    apetizers: [9, 10, 9],
    mainCourses: [11, 12, 15],
    desserts: [13, 14],
    drinks: [1, 2, 3],
    moreApps: [10, 9, 10],
    moreDrinks: [4, 5, 6, 7, 8],
    moreMain: [16, 17, 18],
    moreDesserts: [14, 13, 14],
  },
  {
    _id: 3,
    name: "Seafood",
    image:
      "https://img.delicious.com.au/wBUwni4k/del/2018/09/seafood-boil-88619-2.jpg",
    description: "View dishes that contain seafood",
    apetizers: [9, 10, 9],
    mainCourses: [11, 12, 15],
    desserts: [13, 14],
    drinks: [1, 2, 3],
    moreApps: [10, 9, 10],
    moreDrinks: [4, 5, 6, 7, 8],
    moreMain: [16, 17, 18],
    moreDesserts: [14, 13, 14],
  },
  {
    _id: 4,
    name: "Chicken",
    image:
      "https://previews.123rf.com/images/lenyvavsha/lenyvavsha1510/lenyvavsha151000190/46106232-gourmet-food-chicken-general-tso-s-with-rice-onions-and-broccoli-close-up-on-a-plate-horizontal.jpg",
    description: "View dishes that contain chicken",
    apetizers: [9, 10, 9],
    mainCourses: [11, 12, 15],
    desserts: [13, 14],
    drinks: [1, 2, 3],
    moreApps: [10, 9, 10],
    moreDrinks: [4, 5, 6, 7, 8],
    moreMain: [16, 17, 18],
    moreDesserts: [14, 13, 14],
  },
];
module.exports = function (db) {
  db.FoodPairing.remove({})
    .then(() => db.FoodPairing.collection.insertMany(foodPairings))
    .then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};
