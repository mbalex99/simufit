/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:25 PM
 * To change this template use File | Settings | File Templates.
 */


module.exports = function (app) {
    var oauth2orize = require('oauth2orize');
    var passport = require('passport');
    var crypto = require('crypto');
    var FacebookStrategy = require('passport-facebook').Strategy;
    var BearerStrategy = require('passport-http-bearer').Strategy;
    var configuration = require('./../configuration');

    //models
    var AuthorizationCode = require('./../data/models/AuthorizationCode');
    var AccessToken = require('./../data/models/AccessToken');
    var Client = require('./../data/models/Client');
    var User = require('./../data/models/user');

    function ensureLoggedIn(){
        return function(request, response, next){
            if(!req.session.user || !req.session.user.id){
                return res.redirect('/');
            }
            next();
        }
    }

    var oauth2 = oauth2orize.createServer();

    oauth2.serializeClient(function (client, done) {
        return done(null, client.id);
    });

    oauth2.deserializeClient(function (_id, done) {
        Client.findById(_id, function (err, client) {
            if (err) return done(err);
            return done(null, client);
        });
    });

    oauth2.grant(oauth2orize.grant.code(function (client, redirectURI, user, ares, done) {
        var now = new Date().getTime();
        var code = crypto.createHmac('sha1', 'access_token').update([client.id, now].join()).digest('hex');

        var ac = new AuthorizationCode({
            code: code,
            clientId: client.id,
            redirectUri: redirectURI,
            userId: cleint.userId,
            scope: ares.scope
        });

        ac.save(function (err) {
            if (err) return done(err);
            return don(null, code);
        });


    }));


    oauth2.exchange(oauth2orize.exchange.code(function(client, code, redirectURI, done){
        AuthorizationCode.findOne({code: code}, function(err, code){
            if(err) return done(err);
            if(client._id.toString() !== code.clientId.toString()) return done(null, false);
            if(redirectURI !== code.redirectUri) return done(null, false);

            var now = new Date().getTime();
            var token = crypto.createHmac('sha1', 'access_token').update([client._id, now],join()).digest('hex');

            var accessToken = AccessToken({
                token: token,
                userId: code.userId,
                clientId: client._id,
                scope: code.scope
            });

            accessToken.save(function(err){
                if(err) return done(err);
                return done(null, token);
            });
        })
    }));

    passport.use(new FacebookStrategy({
        clientID: configuration.facebookAppId,
        clientSecret: configuration.facebookAppSecret,
        callbackURL: configuration.facebookRedirectUri
    }, function (accessToken, refreshToken, profile, done) {

        User.findOneAndUpdate({facebookId: profile.id},
            {
                facebookId: profile.id,
                facebookAccessToken: accessToken,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value
            }
            ,
            {upsert: true}, function(err, user){
                if(err){
                    done(err);
                }
                done(null, user);
            });

    }));



};





