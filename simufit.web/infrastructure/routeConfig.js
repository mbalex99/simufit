
var home = require('./../controllers/viewControllers/homeController.js');
var webapp = require('./../controllers/viewControllers/webAppController.js');

exports.registerViewRoutes = function(app, passport){
    app.get('/', home.index);
    app.get('/webapp/', webapp.index);
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}), function(req, res){
        res.redirect('/webapp/');
    });
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}