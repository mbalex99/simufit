/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/12/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var ToDoSchema = require('./toDo');

var EntrySchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserSchema'
    },
    title: String,
    description: String,
    startDateTime: Date,
    endDateTime: Date,
    toDos: [ToDoSchema]
});

mongoose.model('Entry', EntrySchema);