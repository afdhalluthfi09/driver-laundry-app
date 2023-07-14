const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/fcm',
    createProxyMiddleware({
      target: 'https://fcm.googleapis.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/fcm': ''
      }
    })
  );
};
