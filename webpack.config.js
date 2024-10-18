const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
    publicPath: '/', 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.svg$/, 
        oneOf: [
          {
            issuer: /\.jsx?$/, 
            resourceQuery: /react/, 

            use: ['@svgr/webpack'], 
          },
          {
            type: 'asset/resource', 
          },
        ],
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|jpe?g|gif)$/i, 
        type: 'asset/resource', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
  },
  devtool: 'source-map', 
  devServer: {
    static: path.join(__dirname, 'dist'), 
    historyApiFallback: true, 
  },
};
