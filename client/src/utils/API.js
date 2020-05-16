import axios from "axios";

export default {
  getFoodPair: function () {
    return axios.get("/api/foodpage");
  },

  facebookAuth: function () {
    return axios.get("/auth/facebook/cb");
  },
  getDetails: function (id) {
    return axios.get("/api/foodpage/" + id);
  },
  fullMenu: function () {
    return axios.get("/api/foodpage/:id");
  },
};
