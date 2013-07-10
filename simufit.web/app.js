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
var passport = require('passport');
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

app.use(express.static(__dirname + '/public/'));
app.use("/partials", express.static(__dirname + '/partials'));
app.use("/webapp", express.static(__dirname + '/webapp'));


//register routes
passportConfig.register(passport);
routeConfig.registerViewRoutes(app, passport);
routeConfig.registerApiRoutes(app);


nap({
    assets: {
        js:{
            head:[
                '/public/theme/scripts/plugins/system/less.min.js'
            ],
             base:[
                 '/public/theme/scripts/plugins/system/modernizr.js',
                 '/public/theme/scripts/plugins/other/jquery-slimScroll/jquery.slimscroll.min.js',
                 '/public/theme/scripts/plugins/calendars/fullcalendar/fullcalendar/fullcalendar.js'
             ],
             webApp: [
                '/webApp/**/*.js'
             ]
        },
        css:{
            styles:[
                '/public/theme/css/style-flat.css',
                '/public/theme/css/style-simufit.css',
                '/public/theme/scripts/plugins/calendars/fullcalendar/fullcalendar/fullcalendar.css'
            ]
        }
    }
});

//SSL
var options = {
    key: fs.readFileSync('./infrastructure/ssl/privatekey.pem'),
    cert: fs.readFileSync('./infrastructure/ssl/certificate.pem')
};
var server = https.createServer(options, app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
module.exports = app;