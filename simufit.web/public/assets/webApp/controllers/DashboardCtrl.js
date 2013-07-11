Application.Controllers.controller('DashboardCtrl', ['$scope', function ($scope) {
    $scope.title = "Dashboard";
    $scope.isEditing = false;

    $scope.toggleEditing = function(){
            $scope.isEditing = !$scope.isEditing;
    };

    $scope.focusedToDos = [
        {
            title: "28 bench presses",
            description: "Lorem ipsum",
            isDone: false
        },
        {
            title: "10 second sprints",
            description: "Lorem ipsum",
            isDone: true
        },
        {
            title: "2 mile jog",
            description: "Lorem ipsum",
            isDone: false
        }

    ];

}]);