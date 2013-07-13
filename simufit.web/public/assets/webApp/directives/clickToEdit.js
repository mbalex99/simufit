/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/11/13
 * Time: 1:36 PM
 * To change this template use File | Settings | File Templates.
 */

Application.Directives.directive('clickToEdit',function(){
   return{
       restrict: 'EA',
       scope:{
           ngModel: "="
       },
       templateUrl: 'partials/click-to-edit.html',
       controller: 'ClickToEditCrl',
       link: function(scope, element, attrs){

       }
   }
});

Application.Directives.controller('ClickToEditCrl', ['$scope', function($scope){

    $scope.text = $scope.ngModel == null ? "" : $scope.ngModel;
    $scope.isEditorEnabled = false;

    $scope.enableEditor = function(){
        $scope.isEditorEnabled = true;
        $scope.editableText = $scope.text;
    };

    $scope.disableEditor = function(){
        $scope.isEditorEnabled = false;
    };

    $scope.save = function(){
        $scope.text = $scope.editableText;
        $scope.disableEditor();
    }

}]);