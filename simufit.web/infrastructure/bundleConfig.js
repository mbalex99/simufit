/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/2/13
 * Time: 12:29 AM
 * To change this template use File | Settings | File Templates.
 */
var BundleUp = require('bundle-up');


exports.registerBundles = function(app){
    BundleUp(app, __dirname + "/assets", {

    });
}