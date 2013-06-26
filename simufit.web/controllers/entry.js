/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */

var mongojs = require('mongojs');
var appConfig = require('./../appConfig');
var db = mongojs(appConfig.connectionString, ['entries']);


exports.list = function(req, res){

    var entries = [{
        beginDateTime: new Date(),
        endDateTime: new Date(),
        description: "Some cool description",
        height: 193.04,
        weight: 85.729,
        abdominal:  30.5,
        arms: 40.2,
        bodyFat: 0.02,
        calf: 20,
        chest: 34.3,
        dressSize: null,
        hip: 50,
        neck: 20,
        thigh: 50,
        waist: 43,
        toDos: [
            {title: "50 bicep curls in 10 minutes", isDone: true},
            {title: "sprint 40 and run back", isDone: false},
            {title: "sprint 20 and run back", isDone: false},
            {title: "jog 40 and run back", isDone: true}
        ]
    }];

    db.entries.save(entries[0]);

    db.entries.find(function(err, docs){
       res.send(docs);
    });

};