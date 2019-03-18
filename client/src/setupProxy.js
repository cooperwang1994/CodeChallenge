const proxy = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(proxy('/server/search/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/auth/google', {target: 'http://localhost:5000'}))
    app.use(proxy('/server/search', {target: 'http://localhost:5000'}))

    app.use(proxy('/server/analysis/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/server/analysis', {target: 'http://localhost:5000'}))

    app.use(proxy('/server/existing', {target: 'http://localhost:5000'}))
    app.use(proxy('/server/existing/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/server/insert/*', {target: 'http://localhost:5000'}))
}