const webpack = require('webpack');

module.exports = {
  webpack: (cfg) => {
    cfg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API': JSON.stringify(process.env.API),
      })
    );

    return cfg;
  }
};
