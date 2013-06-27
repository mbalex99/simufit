/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:12 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var db = require('./dbFactory').generate(['users']);


exports.getUserByFacebookId = function(facebookId){
        var deferred = q.defer();
        db.users.findOne({facebookId: facebookId}, function(err, doc){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };
exports.createUserByFacebookProfile = function(passportProfile){
        var deferred = q.defer();

        var profile = {
            facebookId: passportProfile.id,
            displayName: passportProfile.displayName,
            emailAddress: passportProfile.emails[0].value
        };

        db.users.save(profile, function(err, doc){
           if(err){
               deferred.reject(err);
           }else{
               deferred.resolve(doc);
           }
        });

        return deferred.promise;
    };
exports.findOrCreateUserFromProfile = function(passportProfile){
    var deferred = q.defer();

    this.getUserByFacebookId(passportProfile.id)
        .then(function(user){
        if(user == null){
            return this.createUserByFacebookProfile(passportProfile);
        }else
        {
            deferred.resolve(user);
        }
        })
        .then(function(){

        });

    return deferred.promise;

};
