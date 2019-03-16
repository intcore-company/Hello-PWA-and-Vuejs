var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    configureWebpack: config => {
        return {
            plugins: [
                new SWPrecacheWebpackPlugin({
                    cacheId: 'appName',
                    filename: 'service-worker.js',
                    minify: true,
                    dynamicUrlToDependencies: {
                        '/': 'v1',
                        '/about': 'v1',
                    },
                    runtimeCaching: [
                        {
                            urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                            handler: 'cacheFirst'
                        },
                        {
                            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\//,
                            handler: 'cacheFirst'
                        },
                        {
                            urlPattern: /^https:\/\/use\.fontawesome\.com\//,
                            handler: 'cacheFirst'
                        },
                    ]
                })
            ]
        };
    }
};
