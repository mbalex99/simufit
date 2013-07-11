/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 3:28 PM
 * To change this template use File | Settings | File Templates.
 */


exports.register = function(nap){
    nap({
        assets: {
            js:{
                base:[
                    '/public/js/modernizr.js',
                    '/public/js/jquery.js',
                    '/public/js/jquery-migrate.js',
                    '/public/js/lodash.js',
                    '/public/js/angular.js',
                    '/public/js/bootstrap.js',
                    '/public/js/fullcalendar.js',
                    '/public/js/jquery.uniform.js',
                    '/public/jquery.ui.widget.js'
                ],
                webApp: [
                    '/webApp/**/*.js'
                ]
            },
            css:{
                styles:[
                    '/public/css/style-flat.css',
                    '/public/css/style-simufit.css',
                    '/public/css/uniform.default.css',
                    '/public/css/fullcalendar.css'
                ]
            }
        }
    });
}