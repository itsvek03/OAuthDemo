const express = require('express')
const app = express()
const port = 5000
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./connection/conn')
require('./services/passport')
const key = require('./config/key')

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [key.COOKIE_KEY]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/AuthRoute')(app)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})