
var home = require('./../controllers/viewControllers/home');

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