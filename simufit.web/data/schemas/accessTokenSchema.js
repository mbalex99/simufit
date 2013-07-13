/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:36 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccessTokenSchema = new Schema({
    token: String,
    userId:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    clientId:{
        type: Schema.ObjectId,
        ref: 'Client'
    },
    expires:{
        type: Number
    },
    scope:{
        type: String
    }
});

module.exports = AccessTokenSchema;