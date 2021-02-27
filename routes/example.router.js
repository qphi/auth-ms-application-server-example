const { RetrieveUserIdMiddlewareFactory } = require('auth-ms-plugin');

module.exports = ctx => {
    const RetrieveUserIdMiddleware = RetrieveUserIdMiddlewareFactory(ctx);
    const controller = ctx.controllers.example;
    return [
        {
            method: 'get',
            path: '/api/member',
            middlewares: [
                RetrieveUserIdMiddleware
            ],

            action: controller.getMethod('serveRouteOnlyAllowedToMember')
        },

        {
            method: 'get',
            path: '/login',
            middlewares: [],

            action: controller.getMethod('serveLogin')
        },

        {
            method: 'get',
            path: '/',
            middlewares: [],

            action: controller.getMethod('serveHome')
        },

    ]
};
