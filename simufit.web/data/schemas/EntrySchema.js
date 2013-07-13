/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/12/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToDoSchema = require('./ToDoSchema');

var EntrySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    description: String,
    startDateTime: Date,
    endDateTime: Date,
    toDos: [ToDoSchema]
});


module.exports = EntrySchema;