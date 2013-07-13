/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/13/13
 * Time: 3:24 AM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var EntrySchema = require('./../schemas/entry');

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;