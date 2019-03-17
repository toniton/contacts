const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const jsonServer = require('json-server');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = process.env.PORT || 3000;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Add json-server to mock data
const router = jsonServer.router(path.join(__dirname, 'db/transferwise.json'));
const middlewares = jsonServer.defaults();
app.use('/api', middlewares);
app.use('/api', router);

// Serve src/assets directory as static files
app.use('/assets', express.static(path.resolve(__dirname, 'src/assets')));

app.use('*', function (req, res) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err);
    res.set('content-type', 'text/html').send(result).end();
  });
});

// Serve the files on port 3000.
app.listen(port, function () {
  console.log(`TransferWise app listening on port ${port}!\n`);
});