/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const compression = require('compression');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require('ngrok') : null;
const logger = require('./loging');
const router = require('../routes');

const customHost = process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

const security = require('./Middleware/security');

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

const renderRoutes = function renderRoutes(req, res, pagePath, queryParams) {
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
};

const routerHandler = router.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    renderRoutes(req, res, route.page, query);
  }
);

app.prepare().then(() => {
  const server = express();

  server.use(compression({ threshold: 0 }));

  // Apply Middleware to the Routes
  server.use(security.securityMiddleware);

  // Set up reouter handler by Next.JS
  server.use(routerHandler);

  // Server All routes
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, host, err => {
    if (err) {
      return logger.error(err.message);
    }

    // Connect to ngrok in dev mode
    if (ngrok) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return logger.error(innerErr);
        }

        logger.appStarted(port, prettyHost, url);
      });
    } else {
      logger.appStarted(port, prettyHost);
    }
  });
});
