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
    redirectURI: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    secret: {
        type: String,
        required: true
    }
});

module.exports = ClientSchema;