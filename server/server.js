/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const compression = require('compression');

const logger = require('./loging');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = isDev && process.env.ENABLE_TUNNEL ? require('ngrok') : null;

const customHost = process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(compression({ threshold: 0 }));

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
