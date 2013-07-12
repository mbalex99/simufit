/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:07 PM
 * To change this template use File | Settings | File Templates.
 */
var FacebookStrategy = require('passport-facebook').Strategy;
var configuration = require('./../configuration');
var userService = require('./../services/userService');

exports.register = function(passport){
    passport.use(new FacebookStrategy({
        clientID: configuration.facebookAppId,
        clientSecret: configuration.facebookAppSecret,
        callbackURL: configuration.facebookRedirectUri
    }, function(accessToken, refreshToken, profile, done){

        userService.upsertUserByFacebookProfile(profile).then(function(user){
           done(null, user);
        }, function(error){
            done(error);
        });
    }));
    passport.serializeUser(function(user, done){
        done(null, user.facebookId);
    });

    passport.deserializeUser(function(id, done){
       userService.getUserByFacebookId(id).then(function(user){
          if(user){
              done(null, user);
          }else{
              done('deserializeUserError');
          }
       });
    });
}
