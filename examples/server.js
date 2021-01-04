const path = require('path');
const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const config = require('../build//webpack.dev');
const compiler = webpack(config);

const app = new express();

app.use(devMiddleware(compiler, config.devServer));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(config.devServer.port, function onAppListening(err) {
  console.log('server is run')
  if (err) {
    console.error(err);
  }
});