import API from "./API";

class Auth {
  constructor() {
    this.authenticated = false;
  }
  authenticated = false;
  checkAuth() {
    API.getUser()
      .then((res) => {
        if (res.data.user !== undefined) {
          console.log("authAPI HERE 1", this.authenticated);
          this.authenticated = true;
          console.log("authAPI HERE 2", this.authenticated);

          //   return (this.authenticated = true);
        }
      })
      .catch((err) => console.log(err));
  }
  isAuthenticated() {
    console.log("authAPI HERE 3", this.authenticated);
    return this.authenticated;
  }
}

export default new Auth();
