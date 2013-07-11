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
var flash = require('connect-flash');
var fs = require('fs');
var routeConfig = require('./infrastructure/routeConfig');
var passportConfig = require('./infrastructure/passportConfig');
var napConfig = require('./infrastructure/napConfig');
var passport = require('passport');
var io = require('socket.io');
global.nap = require('nap');


var app = express();

app.set('port', 3000);
app.set('views', path.join( __dirname, '/views') ); // critical to use path.join on windows
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.methodOverride());
app.use(flash());
app.use(app.router);


app.use("/partials", express.static(path.join(__dirname + '/partials')));
app.use("/webapp", express.static(path.join(__dirname + '/webapp')));
app.use(express.static(path.join(__dirname + '/public')));

//register routes
passportConfig.register(passport);
napConfig.register(nap);
routeConfig.registerViewRoutes(app, passport);
routeConfig.registerApiRoutes(app);




//SSL
var options = {
    key: fs.readFileSync('./infrastructure/ssl/privatekey.pem'),
    cert: fs.readFileSync('./infrastructure/ssl/certificate.pem')
};
var server = https.createServer(options, app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

io.listen(server);
module.exports = app;