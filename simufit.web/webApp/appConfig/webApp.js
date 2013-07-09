/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/2/13
 * Time: 1:04 AM
 * To change this template use File | Settings | File Templates.
 */

var webApp = webApp || {};

webApp.Constants = angular.module('webApp.constants', []);
webApp.Services = angular.module('webApp.services', []);
webApp.Controllers = angular.module('webApp.controllers', []);
webApp.Filters = angular.module('webApp.filters', []);
webApp.Directives = angular.module('webApp.directives', []);

angular.module('webApp',[
    'webApp.filters',
    'webApp.constants',
    'webApp.services',
    'webApp.directives',
    'webApp.controllers'
]).config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
    }]);