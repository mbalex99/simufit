/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:50 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var ClientSchema = require('./../schemas/ClientSchema');

var Client = mongoose.model('ClientSchema', ClientSchema);

module.exports = Client;