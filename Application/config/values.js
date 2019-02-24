/**
 * Project Configuration.
 *
 * NOTE: All file/folder paths should be relative to the project root. The
 * absolute paths should be resolved during runtime by our build internal/server.
 */

const values = {
  title:
    'React Next JS PWA - SEO-Ready, Production-Ready, SSR, Hot-Reload, CSS-in-JS,  SSR Caching',
  description: '',

  // Content Security Policy (CSP)
  // @see server/middleware/security for more info.
  cspExtensions: {
    childSrc: [],
    connectSrc: [],
    defaultSrc: [],
    fontSrc: [],
    imgSrc: [],
    mediaSrc: [],
    manifestSrc: [],
    objectSrc: [],
    scriptSrc: [],
    styleSrc: []
  }
};

exports.default = values;
