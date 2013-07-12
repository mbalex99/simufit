/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 9:29 PM
 * To change this template use File | Settings | File Templates.
 */

var q = require('q');
var db = require('./dbFactory').generate(['entries']);

exports.getEntryById = function (id) {
    var deferred = q.defer();

    db.entries.findOne({_id: db.ObjectId(id)}, function (err, doc) {
            if(err){
                deferred.reject(err);
            }else{
                if(doc == null){
                    deferred.reject();
                }else{
                    deferred.resolve(doc);
                }
            }
        }
    );

    return deferred.promise;
}

exports.addEntry = function (userId, entry) {

    var deferred = q.defer();

    var modelToAdd = {
        userId: db.ObjectId(userId),
        startDateTime: entry.startDateTime,
        endDateTime: entry.endDateTime,
        title: entry.title,
        description: entry.description,
        toDos: entry.toDos,
        measurements: entry.measurements
    };

    db.entries.insert(modelToAdd, function (err, doc) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(doc);
        }
    });

    return deferred.promise;
};

exports.updateEntry = function (entryId, entry) {
    var deferred = q.defer();

    db.entries.update({_id: db.ObjectId(entryId)}, { $set: {
        startDateTime: entry.startDateTime,
        endDateTime: entry.endDateTime,
        title: entry.title,
        description: entry.description,
        toDos: entry.toDos,
        measurements: entry.measurements
    }}, function (err, doc) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(doc);
        }
    });

    return deferred.promise;

};

exports.deleteEntry = function (entryId) {
    var deferred = q.defer();

    db.entries.remove({_id: db.ObjectId(entryId)}, function (err) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}