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


angular.module('application', ['application.filters', 'application.services', 'application.directives', 'application.constants', 'application.controllers', 'ngRoute']).
  config(['$routeProvider', function ($routeProvider) {

      $routeProvider.
        when('/', { templateUrl: 'partials/index.html' }).
        when('/charts/', { templateUrl: 'partials/details-partial.html' }).
        otherwise({ templateUrl: 'partials/error-partial.html' });
  }]).run(['$rootScope', '$window', 'configuration','srvAuth', function ($rootScope, $window, configuration, srvAuth) {
      $rootScope.user = {};
      $window.fbAsyncInit = function() {
          FB.init({
              appId: configuration.facebookAppId,
              channelUrl: '//local.covertonight.com/channel.html',
              status: true,
              cookie: true,
              xfbml: true
          });
          srvAuth.watchAuthenticationStatusChange();
      };
      
      // Load the SDK asynchronously
      (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/all.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }]);