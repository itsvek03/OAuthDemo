const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }))
    app.use(proxy('/user', { target: 'http://localhost:5000/' }))
    app.use(proxy('/logout', { target: 'http://localhost:5000/' }))
}