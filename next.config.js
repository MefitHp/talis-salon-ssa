const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

module.exports = {
  webpack: config => {
    //aliases
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['config'] = path.join(__dirname, 'config');
    // config.resolve.alias['assets'] = path.join(__dirname, 'public');
    // config.resolve.alias['models'] = path.join(__dirname, 'models');
    // config.resolve.alias['models'] = path.join(__dirname, 'models');
    // config.resolve.alias['actions'] = path.join(__dirname, 'redux/actions');
    // config.resolve.alias['reducers'] = path.join(__dirname, 'redux/reducers');
    // config.resolve.alias['selectors'] = path.join(__dirname, 'redux/selectors');
    // config.resolve.alias['sagas'] = path.join(__dirname, 'redux/sagas');
    // config.resolve.alias['api'] = path.join(__dirname, 'redux/sagas/api');
    // config.resolve.alias['styles'] = path.join(__dirname, 'styles');

    /*
     * Config for importing svgs
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    /* Allows you to create global constants which can be configured
     * at compile time, which in our case is our environment variables
     */
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
};
