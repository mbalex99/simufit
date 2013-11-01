'use strict';

Application.Directives.directive('entry', ['utility', function (utility) {
    return {
        restrict: 'EA',
        templateUrl: 'partials/entry.html',
        scope: {
            entry: "="
        },
        link: function (scope, element, attrs) {

            scope.activeTab = scope.activeTab || 'list';

            scope.switchTab = function (tabName) {
                scope.activeTab = tabName;
            };

        },
        controller: ['$scope', function ($scope) {

            $scope.createNewTask = function () {
                $scope.$apply(function() {
                    $scope.entry.gigs.push({
                        title: "",
                        isDone: false
                    });
                });
                
            };

            $scope.onTaskInputBlur = function (index) {
                var gig = $scope.entry.gigs[index];
                if (!utility.isNotEmptyNullOrWhiteSpace(gig.title)) {
                    $scope.removeTask(index);
                }
            };

            $scope.removeTask = function(index) {
                $scope.entry.gigs.splice(index, 1);
                $scope.$apply();
            };

            $scope.enterKeyPressed = function (index) {
                var gig = $scope.entry.gigs[index];
                if (utility.isNotEmptyNullOrWhiteSpace(gig.title)) {
                    $scope.createNewTask();
                }
            };
        }]
    };
}]);
