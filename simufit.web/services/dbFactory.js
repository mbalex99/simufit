/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/26/13
 * Time: 10:59 PM
 * To change this template use File | Settings | File Templates.
 */

exports.generate = function(collections){
        var mongojs = require('mongojs');
        var configuration = require('./../configuration');
        var db = mongojs(configuration.connectionString, collections);
        return db;
    };