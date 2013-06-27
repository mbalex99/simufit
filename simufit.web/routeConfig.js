/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:31 PM
 * To change this template use File | Settings | File Templates.
 */
var home = require('./viewControllers/home');
var entry = require('./apiControllers/entry');
var passport = require('passport');

exports.registerViewRoutes = function(app){
    app.get('/', home.index);
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
};

exports.registerApiRoutes = function(app){
    app.get('/entries', entry.list);
};