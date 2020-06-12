import axios from "axios";

export default {
  getFoodPair: function () {
    return axios.get("/api/foodpage");
  },
  placeOrder: function (id, order) {
    return axios.put("/api/order/" + id, order);
  },
  getUser: function () {
    return axios.get("/api/menu/drinkfood");
  },
  getDetails: function (id) {
    return axios.get("/api/foodpage/" + id);
  },
  fullMenu: function () {
    return axios.get("/api/foodpage/:id");
  },
};
