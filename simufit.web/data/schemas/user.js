/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/12/13
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    facebookId: String,
    facebookAccessToken: String,
    firstName: String,
    lastName: String,
    email: String,
    isMetric: {
        type: Boolean,
        default: false
    }
});

module.exports = UserSchema;