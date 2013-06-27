/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:07 PM
 * To change this template use File | Settings | File Templates.
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var appConfig = require('./appConfig');
var userService = require('./services/userService');


passport.use(new FacebookStrategy({
    clientID: appConfig.facebookAppId,
    clientSecret: appConfig.facebookAppSecret,
    callbackUrl: appConfig.facebookRedirectUri
}, function(accessToken, refreshToken, profile, done){

}));