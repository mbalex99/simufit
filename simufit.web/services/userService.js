/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:12 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var db = ('./dbFactory').generate(['users']);


module.exports = function(){

    var getUserByFacebookId = function(facebookId){
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

    var createUserByFacebookProfile = function(profile){
        var deferred = q.defer();

        getUserByFacebookId(profile.id).then(function(user){

        })

        return deferred.promise;
    };

    return{
        getUserByFacebookId: getUserByFacebookId,
        createUserByFacebookProfile: createUserByFacebookProfile
    };
}