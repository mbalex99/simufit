/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:31 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var AuthorizationCodeSchema = require('./../schemas/AuthorizationCodeSchema');

var AuthorizationCode = mongoose.model('AuthorizationCode', AuthorizationCodeSchema);

module.exports = AuthorizationCode;