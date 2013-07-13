/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:28 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorizationCodeSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    redirectUri:{
        type: String,
        require: true
    },
    expires:{
        type: Number
    }
});

module.exports = AuthorizationCodeSchema;
