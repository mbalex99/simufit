'use strict';

Application.Controllers.controller('SidebarCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.avatarUrl = "https://graph.facebook.com/max.alexander.9/picture?type=square";

    $scope.$on('auth.statusChange', function (event, response) {
        if (response.status === 'connected') {
            $scope.menuItems = [{ title: "Discover", href: "#/", iconClass: "icon-eye-open" }, { title: "Friends", href: "#/friends", iconClass: "icon-group" }, { title: "Settings", href: "#/settings", iconClass: "icon-cog" }];
            $scope.hideLogoutButton = false;
            $scope.$apply();
        } else {
            
            $scope.menuItems = [{ title: "Help", href: "#/help", iconClass: "icon-question" }, { title: "Login", href: "#/login", iconClass: "icon-facebook" }];
            $scope.hideLogoutButton = true;
            $scope.$apply();
        }
    });

}]);