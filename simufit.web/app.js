/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 6/25/13
 * Time: 12:31 AM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var https = require('https');
var fs = require('fs');

var app = express();

app.get('/tests', function(req, res){
    res.send({
        test:'test'
    });
});

//SSL
var options = {
    key: fs.readFileSync('./ssl/privatekey.pem'),
    cert: fs.readFileSync('./ssl/certificate.pem')
};

var server = https.createServer(options, app);
server.listen(3000);
