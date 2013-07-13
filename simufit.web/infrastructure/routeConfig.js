
var home = require('./../controllers/viewControllers/homeController.js');
var webapp = require('./../controllers/viewControllers/webAppController.js');

exports.registerViewRoutes = function(app, passport){
    app.get('/', ensureAuthenticated, home.index);
    app.get('/webapp', splash.index);
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/'}), function(req, res){
        res.redirect('/webapp');
    });
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/splash');
    });
};




function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/splash');
}