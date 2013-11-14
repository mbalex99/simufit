'use strict';

Application.Directives.directive('entry', function () {
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

            var isNotEmptyNullOrWhiteSpace = function (myString) {
                if (/\S/.test(myString)) {
                    return true;
                } else {
                    return false;
                }
            };

            $scope.createNewGig = function (index) {
                $scope.$apply(function() {
                    $scope.entry.gigs.splice(index + 1, 0, { title: "", isDone: false });
                });

                $scope.$broadcast('focusGig', index + 1);

            };

            $scope.removeGig = function(index) {
                //$scope.$apply(function() {
                    $scope.entry.gigs.splice(index, 1);
                    if ($scope.entry.gigs.length > 0) {
                        $scope.$broadcast('focusGig', $scope.entry.gigs.length - 1);
                    }

                //});
            };

            $scope.enterKeyPressed = function (index) {
                var gig = $scope.entry.gigs[index];


                
                if (isNotEmptyNullOrWhiteSpace(gig.title)) {
                    $scope.createNewGig(index);
                }
            };
        }]
    };
});
