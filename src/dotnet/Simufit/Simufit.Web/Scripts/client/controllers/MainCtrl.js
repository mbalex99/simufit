'use strict';

Application.Controllers.controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.gigs = [
        {
            title: '20 pushups',
            isDone: true,
        }
    ];
}]);