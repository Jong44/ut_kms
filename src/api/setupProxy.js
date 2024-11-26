const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        'https://dummy-kampus.syaifur.id',
        createProxyMiddleware({
            target: 'https://ut-kms.vercel.app',
            changeOrigin: true,
        })
    );
};
