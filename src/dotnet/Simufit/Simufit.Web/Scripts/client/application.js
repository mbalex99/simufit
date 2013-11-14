'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);


angular.module('application', ['application.filters', 'application.services', 'application.directives', 'application.constants', 'application.controllers', 'ngRoute', 'ui.sortable']).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'partials/main.html', controller: 'MainCtrl' }).
        when('/login', { templateUrl: 'partials/login.html', controller: 'LoginCtrl' }).
        when('/charts/', { templateUrl: 'partials/details-partial.html' }).
        otherwise({ templateUrl: 'partials/error.html' });
      
  }]).run(['$rootScope', '$window', 'configuration', '$location', 'facebookService', 'userService', function ($rootScope, $window, configuration, $location, facebookService, userService) {

      $rootScope.$on('auth.statusChange', function (event, response) {
          if (response.status === 'connected') {
              console.log('connected');
              // the user is logged in and has authenticated your app
              $rootScope.accessToken = response.authResponse.accessToken;
              userService.initialize().then(function (proxy) {
                  proxy.invoke('getClaims', $rootScope.accessToken);
              });
              $location.path('/');
          } else {
              console.log("the user isn't logged in to Facebook.");
              $location.path('/login');
          }
      });

  }]);