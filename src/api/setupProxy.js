const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        'https://dummy-kampus.syaifur.id',
        createProxyMiddleware({
            target: 'http://localhost:5173',
            changeOrigin: true,
        })
    );
};
