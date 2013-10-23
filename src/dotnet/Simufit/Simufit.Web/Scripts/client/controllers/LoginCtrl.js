'use strict';

Application.Controllers.controller('LoginCtrl', ['$scope', '$rootScope', '$location' ,'facebookService', 'hubProxy', function ($scope, $rootScope, $location,  facebookService, hubProxy) {
    $scope.login = function() {
        facebookService.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                $location.path('/');
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };

}]);