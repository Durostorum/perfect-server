// const localStrategy = require("passport-local").Strategy;
const facebookStrategy = require("passport-facebook");
const key = require("./keys");

// Load User Model
const UserModel = require("../models/user-model");

module.exports = (passport) => {
  // passport.use(
  //   new localStrategy(
  //     {
  //       usernameField: "email",
  //     },
  //     (email, password, done) => {
  //       UserModel.findOne({ email }).then((user) => {
  //         if (!user) {
  //           return done(null, false, {
  //             message: "That email is not registered",
  //           });
  //         }

  //         // Compare password
  //         bcrypt.compare(password, user.password, (err, isFound) => {
  //           if (err) throw err;
  //           if (isFound) {
  //             return done(null, user);
  //           } else {
  //             return done(null, false, { message: "Your Password incorrect" });
  //           }
  //         });
  //       });
  //     }
  //   )
  // );

  passport.use(
    new facebookStrategy(
      {
        clientID: key.facebook.clientID,
        clientSecret: key.facebook.clientSecret,
        callbackURL: "/auth/facebook/callback",
        profileFields: ["emails", "name", "displayName"],
      },
      function (accessToken, refreshToken, profile, done) {
        const {
          _json: { email, name },
        } = profile;

        const userData = {
          email,
          name,
          provider: profile.provider,
        };

        User.findOne({ email: email }).then((user) => {
          if (user) {
            return done(null, user);
          }

          // Hash user password
          const newUser = User({
            name: userData.name,
            email: userData.email,
            provider: userData.provider,
          });

          newUser
            .save()
            .then((user) => {
              console.log(user);
              res.redirect("/drinkfood");
            })
            .catch((err) => console.log(err));
          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
      done(null, user);
    });
  });
};
