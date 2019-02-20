/* eslint-disable global-require */
const withSASS = require('@zeit/next-sass');

const initWebpack = {
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE_BUILD) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      );
    }

    return config;
  }
};

/* eslint-enable global-require */
module.exports = withSASS(initWebpack);
