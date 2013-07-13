/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/12/13
 * Time: 12:27 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');

var ToDoSchema = new mongoose.Schema({
   title: String,
   description: String,
   isDone :{
       type: Boolean,
       default: false
   }
});

module.exports = ToDoSchema;