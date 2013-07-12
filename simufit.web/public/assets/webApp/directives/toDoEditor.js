/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 12:17 PM
 * To change this template use File | Settings | File Templates.
 */
Application.Directives.directive('toDoEditor', function(){
    return{
        scope:{
            ngModel: "="
        },
        restrict: "EAC",
        templateUrl: "partials/todo-editor.html",
        controller: 'ToDoEditorCtrl',
        link: function(scope, element, attrs){

            scope.$watch('ngModel', function(newValue, oldValue){
               scope.toDos = scope.ngModel;
            });
        }
    };
});

Application.Directives.controller('ToDoEditorCtrl', ['$scope', function($scope){

    $scope.newToDo = function(){
        $scope.toDos.push({
            title: "New todo thing",
            description: "Lorem sdfsdf",
            isDone: false
        });
    };

    $scope.deleteToDo = function(index){
         $scope.toDos.splice(index, 1);
    };

}]);


