import axios from "axios";

export default {
  getFoodPair: function () {
    return axios.get("/api/foodpage");
  },

  googleAuth: function () {
    return axios.get("/api/auth/google/redirect");
  },
  getDetails: function (id) {
    return axios.get("/api/foodpage/" + id);
  },
  fullMenu: function () {
    return axios.get("/api/foodpage/:id");
  },
};
