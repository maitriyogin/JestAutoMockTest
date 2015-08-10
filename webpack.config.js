var fs = require('fs');
var fileExists = fs.existsSync;
var mkdirp = require('mkdirp');
var path = require('path');
var webpack = require('webpack');
var React = require('react');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CODE = __dirname;
var IGNORE = ['shared'];

var galleries = process.env.NODE_ENV === 'galleries';
var index = 'index';

makeIndex('app');

module.exports = {

  devtool: 'eval',

  entry: { app:['./src/'+index]},

  output: {
    filename: "[name].js",
    path: './build',
    publicPath: "/",
  },

  resolve: {
    extensions: [ '', '.js' ],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: require.resolve('jquery'), loader: "expose?jQuery" },
      {test: /\.png/, loader: 'url?limit=100000&mimeetype=image/png' }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]

};

function makeIndex(dir) {
    fs.writeFileSync('index.html', makeMarkup('app'));  
}

function makeMarkup(mainFile) {
  return React.renderToStaticMarkup((
    React.DOM.html({},
      React.DOM.link({ rel: 'stylesheet', href: './' + mainFile + '.css' }),
      React.DOM.body({},
        React.DOM.div({ id: 'app' }),
        React.DOM.script({ src: './' + mainFile + '.js' })
      )
    )
  ));
}

}
