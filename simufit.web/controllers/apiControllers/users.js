/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 9:11 PM
 * To change this template use File | Settings | File Templates.
 */

var userService = require('./../../services/userService');

exports.list = function(request, response){
    userService.getUsers().then(function(users){
        response.send(users);
    });
};

exports.single = function(request, response){
    userService.getUserById(request.params.userId).then(function(user){
        response.send(user);
    }, function(err){
        response.send(500);
    });
}