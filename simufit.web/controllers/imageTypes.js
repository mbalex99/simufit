/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */
var Connection = require('tedious').Connection;
var appConfig = require('./../appConfig');
var Request = require('tedious').Request;


exports.list = function(req, res){
    var connection = new Connection(appConfig.dbConnectionObject);

    connection.on('connect', function(err){
        //if no error, then we are good to go.
        if(err){
            console.log(err);
        }else
        {
            var request = new Request("SELECT * FROM ImageTypes", function(err, rowCount, rows){
                console.log(rowCount);
                res.send(rows);
            })
            connection.execSql(request);
        }
    });

};