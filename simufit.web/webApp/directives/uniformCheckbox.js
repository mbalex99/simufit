/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/10/13
 * Time: 3:10 PM
 * To change this template use File | Settings | File Templates.
 */

Application.Directives.directive('uniformCheckbox', function(){
     return{
         restrict: 'CA',
         link: function(scope, element, attrs){

             var elem = $(element);
             elem.uniform();

             scope.$watch(function(){
                 $.uniform.update(elem);
             });
         }
     }
})