const { BaseController } = require('micro');

class ExampleController extends BaseController {
    constructor(context = {}) {
        super(context);
    }

    serveLogin(request, response) {
        response.json({
            message: '/login'
        });
    }

    serveHome(request, response) {
        response.send('home sweet home (of mine)');
    }

    serveRouteOnlyAllowedToMember(request, response) {
        if (request.user_id) {
            return response.json({
                message: {
                    user_id: request.user_id
                }
            });
        }

        else {
            return request.send('403');
        }
    }
}

module.exports = ExampleController;