
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/dev');
const mongoose = require('mongoose');

const User = mongoose.model('User');

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// })

// passport.deserializeUser((id, done) => {
//     User.findById(id)
//         .then(user => {
//             done(null, user);
//         })
// })
passport.serializeUser((user, done) => {
    done(null, user.id); 
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({googleId: profile.id}).then(existingUser => {
            if(existingUser) {
                done(null, existingUser);
            } else {
                new User({googleId: profile.id, 
                          googleName: profile.name.givenName, 
                          googleEmail: profile.emails[0].value}).save().then(user => done(null, user));
            }
        })
    }
));