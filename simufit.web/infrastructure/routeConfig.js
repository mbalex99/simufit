
var home = require('./../controllers/viewControllers/home');
var splash = require('./../controllers/viewControllers/splash');

exports.registerViewRoutes = function(app, passport){
    app.get('/', ensureAuthenticated, home.index);
    app.get('/splash', splash.index);
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/splash'}), function(req, res){
        res.redirect('/');
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