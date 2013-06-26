/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */
var Connection = require('tedious').Connection;
var appConfig = require('./../appConfig');



exports.list = function(req, res){
     var connection = new Connection(appConfig.dbConnectionObject);

    connection.on('connect', function(err){
        //if no error, then we are good to go.
        if(err){
            console.log(err);
        }else
        {
            console.log('no connection error');
            executeStatement();
        }
    });

    function executeStatement(){
        var Request = require('tedious').Request;

        var request = new Request("SELECT * FROM ImageTypes", function(err, rowCount){
            if(err){
                console.log(err);
            }
        });

        request.on('done', function(rowCount, more, rows) {
            console.log(rows);
        });

        connection.execSql(request);
    }

};