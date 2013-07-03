/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:31 PM
 * To change this template use File | Settings | File Templates.
 */
var home = require('./../controllers/home');

exports.registerViewRoutes = function(app, passport){
    app.get('/', home.index);
    app.get('/auth/facebook', passport.authenticate('facebook', {scope:"email"}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}), function(req, res){
        res.redirect('/');
    });
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};

exports.registerApiRoutes = function(app){

};