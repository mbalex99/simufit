/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 3:22 AM
 * To change this template use File | Settings | File Templates.
 */


var Entry = require('./../../data/models/entry');
var User = require('./../../data/models/user');
var q = require('q');


exports.list = function(request, response){

};


exports.single = function(request, response){

};

//POST users/:userId/entries
exports.addToUser = function(request, response){
    var userId = request.params.userId;

    User.findById(userId, function(err, user){
        if(err){

        }
    });

};

//PUT entries/:entryId
exports.update = function(request,response){

};

//DELETE entries/:entryId
exports.delete = function(request, response){

};