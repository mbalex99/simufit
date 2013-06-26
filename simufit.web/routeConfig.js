/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 6/26/13
 * Time: 12:31 PM
 * To change this template use File | Settings | File Templates.
 */

var imageTypes = require('./controllers/imageTypes');

module.exports = function(app){
    app.get('/imageTypes', imageTypes.list);
};