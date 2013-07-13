/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/12/13
 * Time: 12:17 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var UserSchema = require('./../schemas/UserSchema');

var User = mongoose.model('User', UserSchema);

module.exports = User;