'use strict';

Application.Directives.directive('entry', function() {
    return {
        restrict: 'EA',
        templateUrl: 'partials/entry.html',
        scope: {
            gigs: "=gigs",
            measurements: '=measurements'
        },
        link: function(scope, element, attrs) {
            
        },
        controller: 'EntryCtrl'
    };
});


Application.Controllers.controller('EntryCtrl', ['$scope', function($scope) {

    $scope.activeTab = $scope.activeTab || 'list';

    $scope.switchTab = function(tabName) {
        $scope.activeTab = tabName;
    };

}]);