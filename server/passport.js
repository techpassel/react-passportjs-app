const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const passport = require('passport');
const GOOGLE_CLIENT_ID = "283838566835-2mev0lj292k1dvd70a4jumbs0a88fnsd.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "322162f74f804906ee53";
const GITHUB_CLIENT_SECRET = "ad8ea48c7fb29cb0c27cff18d05ca8941c8610df";

const FACEBOOK_CLIENT_ID = "283838566835-2mev0lj292k1dvd70a4jumbs0a88fnsd.apps.googleusercontent.com";
const FACEBOOK_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        /*
        const user = {
            googleId: profile.id,
            name: profile.name,
            avator: profile.photos[0],
            email: profile.email
        }
        User.findOrCreate({ user }, function (err, user) {
            return cb(err, user);
        });
        Here we are not using any database but if we were using we could have saved userdata in the above manner.
        So we are simply passing null as "err" and entire profile data as "user" in the callback function "cb"
        CB is used for serialization and deserialization of data in passport
        */
        cb(null, profile);
    }
));

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
    }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
    }
));

passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((user, cb) => {
    cb(null, user);
})