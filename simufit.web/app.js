/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/25/13
 * Time: 12:31 AM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var path = require('path');
var https = require('https');
var fs = require('fs');
var partials = require('express-partials');
var routeConfig = require('./infrastructure/routeConfig');
var passportConfig = require('./infrastructure/passportConfig');
var passport = require('passport');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join( __dirname, '/views') ); // critical to use path.join on windows
    app.set('view engine', 'vash');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/common'));

    app.use(express.cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
});


passportConfig.register(passport);

//register routes
routeConfig.registerViewRoutes(app);
routeConfig.registerApiRoutes(app);


//SSL
var options = {
    key: fs.readFileSync('./infrastructure/ssl/privatekey.pem'),
    cert: fs.readFileSync('./infrastructure/ssl/certificate.pem')
};
var server = https.createServer(options, app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
module.exports = app;