// config-overrides.js

const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    'styles': require('path').resolve(__dirname, 'src/styles/'),
  })
);