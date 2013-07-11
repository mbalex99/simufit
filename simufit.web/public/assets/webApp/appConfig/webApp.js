/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/2/13
 * Time: 1:04 AM
 * To change this template use File | Settings | File Templates.
 */

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);

angular.module('application',[
    'application.filters',
    'application.constants',
    'application.services',
    'application.directives',
    'application.controllers'
]).config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl'});
    }]);