/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:25 PM
 * To change this template use File | Settings | File Templates.
 */

var oauth2orize = require('oauth2orize');
var server = oauth2orize.createServer();
var AuthorizationCode = require('./../data/models/AuthorizationCode');
var Client = require('./../data/models/Client');
var passport = require('passport');
var crypto = require('crypto');

var oauth2 = oauth2orize.createServer();

oauth2.serializeClient(function(client, done){
    return done(null, client.id);
});

oauth2.deserializeClient(function(_id, done){
    Client.findById(_id, function(err, client){
        if(err) return done(err);
        return done(null, client);
    });
});

oauth2.grant(oauth2orize.grant.code(function(client,redirectUri,user, ares, done){
    var now = new Date().getTime();
    var code = crypto.createHmac('sha1', 'access_token').update([client.id, now].join()).digest('hex');


}));