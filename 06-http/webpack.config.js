const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimmizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );


module.exports = {

  mode: 'development',
  optimization: {
    minimizer: [ new OptimmizeCssAssetsPlugin() ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: false,
          minimize: false,
        }
      },
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin( {
      template: './src/index.html',
      filename: './index.html'
    } ),
    new MiniCssExtractPlugin( {
      filename: '[name].css',
      ignoreOrder: false
    } ),
    new CopyPlugin( {
      patterns: [
        { from: 'src/assets', to: 'assets/' }
      ]
    } ),
    new CleanWebpackPlugin(),
  ]
};
