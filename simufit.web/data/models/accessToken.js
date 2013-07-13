/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var AccessTokenSchema = require('./../schemas/AccessTokenSchema');

var AccessToken = mongoose.model('AccessToken', AccessTokenSchema);

module.exports = AccessToken;
