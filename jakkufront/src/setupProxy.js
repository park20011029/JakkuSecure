// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://ssanmy.store',
            changeOrigin: true,
            secure: false,
        })
    );
};
