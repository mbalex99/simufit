/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

var entriesController = require('./../controllers/apiControllers/entriesController.js');
var usersController  = require('./../controllers/apiControllers/usersController.js');

exports.registerApiRoutes = function(app){

    app.get('/api/users', usersController.list);
    app.get('/api/users/:userId', usersController.single);

};