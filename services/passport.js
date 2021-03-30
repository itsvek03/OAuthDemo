const passport = require('passport')
const key = require('../config/key')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../model/UserModel')


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})


passport.use(new GoogleStrategy({
    clientID: key.GOOGLE_ClientID,
    clientSecret: key.GOOGLE_SECRET_KEY,
    callbackURL: "/auth/google/callback",
    proxy: true
},
    function (accessToken, refreshToken, profile, cb) {
        console.log("Access Token", accessToken)
        console.log("Refresh Token", refreshToken)
        console.log("Profile", profile)
        console.log("CB", cb)

        User.findOne({ googleId: profile.id })
            .then((existing) => {
                if (existing) {
                    cb(null, existing)
                }
                else {
                    new User(
                        {
                            googleId: profile.id,
                            username: profile.displayName,
                            picture: profile._json.picture
                        }).save()
                        .then((user) => { cb(null, user) })
                }
            })

    }
));

