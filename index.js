const MockServer = require('./server.mock');

const path = require('path');

const server = new MockServer({
    config:  path.resolve(__dirname, './config/'),
    env: path.resolve(__dirname, `.env`)
});


server.start();

module.exports = server.app;