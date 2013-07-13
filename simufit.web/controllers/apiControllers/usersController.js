/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

var User = require('./../../data/models/user');

exports.list = function(request, response){
    var query = User.find();
    query.exec(function(err, docs){
       response.send(docs);
    });
};

exports.single = function(request, response){

    var query = User.findById(request.params.userId);

    query.exec(function(err, doc){
        if(doc){
            response.send(doc);
        }else{
            response.send(404);
        }
    });

};