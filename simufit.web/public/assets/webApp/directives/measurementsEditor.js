/**
 * Created with JetBrains WebStorm.
 * User: Maximilian
 * Date: 7/11/13
 * Time: 1:37 AM
 * To change this template use File | Settings | File Templates.
 */
Application.Directives.directive('measurementsEditor', function(){
   return{
       restrict: 'EAC',
       templateUrl: 'partials/measurements-editor.html',
       scope:{
           ngModel: '='
       },
       link: function(scope, element, attrs){

       }
   };
});