/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */


var userService = require('./../../services/userService');
var entryService = require('./../../services/entryService');


exports.newEntry = function(request, response){

}

exports.update = function(request, response){

};

exports.delete = function(request, response){
    entryService.getEntryById(request.params.entryId).then(function(doc){
        entryService.deleteEntry(request.params.entryId).then(function(){
            response.send(200);
        },function(){
            response.send(500);
        })
    })

};