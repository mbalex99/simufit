/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:07 PM
 * To change this template use File | Settings | File Templates.
 */
var FacebookStrategy = require('passport-facebook').Strategy;
var configuration = require('./../configuration');
var User = require('./../data/models/user');

exports.register = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            if (user) {
                done(null, user);
            } else {
                done('deserializeUserError');
            }
        });
    });
}
