'use strict';

Application.Controllers.controller('SidebarCtrl', ['$scope', '$rootScope', 'facebookService', function ($scope, $rootScope, facebookService) {
    
    $scope.$on('auth.statusChange', function (event, response) {
        $scope.$apply(function() {

            if (response.status === 'connected') {
                $scope.menuItems = [{ title: "Discover", href: "#/", iconClass: "icon-eye-open" }, { title: "Friends", href: "#/friends", iconClass: "icon-group" }, { title: "Settings", href: "#/settings", iconClass: "icon-cog" }];
                $scope.isLoggedIn = true;

            } else {
                $scope.menuItems = [{ title: "Help", href: "#/help", iconClass: "icon-question" }, { title: "Login", href: "#/login", iconClass: "icon-facebook" }];
                $scope.isLoggedIn = false;
            }

        });
    });

    $scope.logout = function() {
        facebookService.logout(function (response) {
            $rootScope.accessToken = "";
        });
    };

    $scope.$on('gotClaims', function(event, user) {
        $scope.$apply(function() {
            $scope.avatarUrl = "https://graph.facebook.com/" + user.facebookId + "/picture?type=square";
            $scope.firstName = user.firstName;
        });
    });

}]);