import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: {
    javascript: './app/index.jsx'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Secret crush'
    })
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../.build/www'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }
    ]
  }
}
