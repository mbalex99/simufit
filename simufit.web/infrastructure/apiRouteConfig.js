/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

var entries = require('./../controllers/apiControllers/entries.js');
var users  = require('./../controllers/apiControllers/users.js');

exports.registerApiRoutes = function(app){

    app.get('/api/users', users.list);
    app.get('/api/users/:userId', users.single);

    app.post('/api/users/:userId/entries', entries.newEntry)
};