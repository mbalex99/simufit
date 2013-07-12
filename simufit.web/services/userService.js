/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:12 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var db = require('./dbFactory').generate(['users']);


exports.getUserByFacebookId = function (facebookId) {
    var deferred = q.defer();
    db.users.findOne({facebookId: facebookId}, function (err, doc) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(doc);
        }
    });
    return deferred.promise;
};

exports.upsertUserByFacebookProfile = function (passportProfile) {
    var deferred = q.defer();

    db.users.update({facebookId: passportProfile.id}, {
        facebookId: passportProfile.id,
        displayName: passportProfile.name,
        emailAddress: passportProfile.emails[0].value
    }, {upsert: true}, function (err, doc) {
        if (err) {
            deferred.reject(err);
        } else {
            var profile = {
                facebookId: passportProfile.id,
                displayName: passportProfile.displayName,
                emailAddress: passportProfile.emails[0].value
            };
            deferred.resolve(profile);
        }
    });

    return deferred.promise;

};

exports.getUsers = function(){
    var deferred = q.defer();

    db.users.find(function(err, users){
       if(err){
           deferred.reject(err);
       }else{
           deferred.resolve(users);
       }
    });

    return deferred.promise;
};

exports.getUserById = function(userId){
    var deferred = q.defer();

    db.users.findOne({_id: db.ObjectId(userId)}, function(err, doc){
       if(err){
           deferred.reject(err);
       }else{
           deferred.resolve(doc);
       }
    });

    return deferred.promise;
}


