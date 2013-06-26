/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:31 PM
 * To change this template use File | Settings | File Templates.
 */

var entry = require('./controllers/entry');

module.exports = function(app){
    app.get('/entries', entry.list);
};