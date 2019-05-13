/* eslint-disable global-require */
const withSASS = require('@zeit/next-sass');

const initWebpack = {
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/.git/'],
        enforce: 'pre'
      });
    }

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
