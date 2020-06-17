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
  logingOut: function () {
    return axios.get("/api/logout");
  },
  registerUser: function (name, email, password) {
    return axios.post("/api/register", { name, email, password });
  },
};
