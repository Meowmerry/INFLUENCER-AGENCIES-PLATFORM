const path = require('path');

module.exports = {
  entry: './client/src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        use: [
          {
              loader:'babel-loader',
              options: {
                  presets:['@babel/preset-env', '@babel/preset-react']
              }
          }
      ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset/resource',
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname,'index.html'),
    filename: 'index.html',
  })],
  devServer: {
    static: {
        directory: path.join(__dirname, 'client'),
    },
    proxy: {
        '/api/leaders': {
            target: 'http://localhost:3001/',
        }
    },
    port: 1337,
},
};