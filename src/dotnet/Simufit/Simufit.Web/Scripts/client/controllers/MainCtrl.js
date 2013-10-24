'use strict';

Application.Controllers.controller('MainCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.entry = {
        gigs: [{ title: '20 pushups', isDone: false }, { title: "Sprint 45 meters", isDone: true }],
        measurements: [
            { title: 'Weight', value: 175, unit: 'lbs' },
            { title: 'Height', value: 72, unit: 'in' },
            { title: 'Height', value: 72, unit: 'in' }
        ]
    };
}]);