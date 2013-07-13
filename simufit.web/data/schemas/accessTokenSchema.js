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
    token: {
        type: String,
        required: true
    },
    secret:{
        type: String,
        clientId: {
            type: Schema.Types.ObjectId,
            ref: "Client"
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        expires:{
            type: Date
        }
    }
});

module.exports = AccessTokenSchema;