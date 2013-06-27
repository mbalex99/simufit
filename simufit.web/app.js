/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/25/13
 * Time: 12:31 AM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var https = require('https');
var fs = require('fs');
var partials = require('express-partials');
var routeConfig = require('./routeConfig');

var app = express();
app.use(partials());
app.set('view engine', 'ejs');

//register routes
routeConfig.registerViewRoutes(app);
routeConfig.registerApiRoutes(app);

module.exports = app;

//SSL
var options = {
    key: fs.readFileSync('./ssl/privatekey.pem'),
    cert: fs.readFileSync('./ssl/certificate.pem')
};

var server = https.createServer(options, app);
server.listen(3000);
