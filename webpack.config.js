const path = require('path');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  target: "webworker",
  context: __dirname,
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, 'build')
  },
  mode,
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  }
};
