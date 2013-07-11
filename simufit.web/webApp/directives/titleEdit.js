/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/11/13
 * Time: 1:00 AM
 * To change this template use File | Settings | File Templates.
 */

Application.Directives.directive('titleEdit', function(){
   return{
       scope:{
           ngModel: "="
       },
       templateUrl: "partials/title-edit.html",
       link: function(scope, element, attrs){

           scope.$watch('ngModel', function(){
              scope.title = scope.ngModel;
           });
       }
   }
});