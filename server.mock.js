const { MicroService, RoutingService } = require('micro');
const routes = require('./routes/example.router');

const { plugin } = require('auth-ms-plugin');

console.log(require('auth-ms-plugin'))

class MockServer extends MicroService {
    constructor(settings = {}) {
        super(settings);

        const container = this.loadContainer(settings.config);

        plugin(container, this.app);

        const readOnlyContainer = { ...container };
        RoutingService.use(this.app, routes(readOnlyContainer));
    }

    loadContainer(configPath) {
        const config = { ...require(configPath) };
        const factoriesRecorded = config.factories;
        delete config.factories;

        let container = config;

        if (Array.isArray(factoriesRecorded) && factoriesRecorded.length > 0) {
            factoriesRecorded.forEach(factory => {
                try {
                    factory(container);
                }

                catch(error) {
                    console.error(error);
                }
            });
        }

        return container;
    }
}

module.exports = MockServer;