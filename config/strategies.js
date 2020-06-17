const localStrategy = require("passport-local").Strategy;
const facebookStrategy = require("passport-facebook");
const googleStrategy = require("passport-google-oauth20");
const key = require("./keys");
const validPassword = require("../config/passwordUtils").validPassword;

// Load User Model
const UserModel = require("../models/user-model");

module.exports = (passport) => {
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
      },
      (email, password, done) => {
        UserModel.findOne({ email })
          .then((user) => {
            if (!user) {
              return done(null, false);
            }

            const isValid = validPassword(password, user.hash, user.salt);

            if (isValid) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          })
          .catch((err) => done(err));
      }
    )
  );

  passport.use(
    new googleStrategy(
      {
        clientID: key.google.clientID,
        clientSecret: key.google.clientSecret,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        console.log("FROM GOOGLE LOG IN PROFILE", profile);
        const {
          _json: { email, name },
        } = profile;
        const userData = {
          accessToken,
          email,
          name,
          provider: profile.provider,
        };

        UserModel.findOne({ email }).then((user) => {
          if (user) {
            return done(null, user);
          }

          // Hash user password
          const newUser = UserModel({
            name: userData.name,
            email: userData.email,
            provider: userData.provider,
            accessToken: userData.accessToken,
          });

          newUser
            .save()
            .then((user) => {
              console.log(user);
              // res.redirect("/drinkfood");
            })
            .catch((err) => console.log(err));
          return done(null, user);
        });
      }
    )
  );

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
          accessToken,
          email,
          name,
          provider: profile.provider,
        };

        UserModel.findOne({ email }).then((user) => {
          if (user) {
            return done(null, user);
          }

          // Hash user password
          const newUser = UserModel({
            name: userData.name,
            email: userData.email,
            provider: userData.provider,
            accessToken: userData.accessToken,
          });

          newUser
            .save()
            .then((user) => {
              console.log(user);
              // res.redirect("/drinkfood");
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
