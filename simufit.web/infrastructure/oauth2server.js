/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:25 PM
 * To change this template use File | Settings | File Templates.
 */

var oauth2orize = require('oauth2orize');
var server = oauth2orize.createServer();

server.exchange(oauth2orize.exchange.code(function(client, code, redirectURI, done){

}))



module.exports = server;
