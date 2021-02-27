const ExampleController = require('../controllers/example.controller');

module.exports = {
    state: {},
    api: {},
    params: {},
    services: {},
    controllers: {
        example: new ExampleController(),
    }
};