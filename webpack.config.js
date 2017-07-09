var webpack = require("webpack");
module.exports={
  entry:'./renderer.js',
  output:{
    filename:'./app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  },
  plugins: [
   new webpack.DefinePlugin({
     IN_BROWSER: true,
   })
 ]
}
