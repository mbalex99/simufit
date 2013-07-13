/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 2:33 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    redirectUri: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userId:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    description: String,
    secret: {
        type: String,
        required: true
    }
});

module.exports = ClientSchema;