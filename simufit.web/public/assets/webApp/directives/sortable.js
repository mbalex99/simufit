/**
 * Created with JetBrains WebStorm.
 * User: malexander
 * Date: 7/10/13
 * Time: 4:56 PM
 * To change this template use File | Settings | File Templates.
 */

Application.Directives.directive('sortable', function() {
    return {
        restrict: 'A',
        scope: {
            ngModel: "="
        },
        link: function(scope, element, attrs) {

            var toUpdate;
            var startIndex = -1;

            var elem = $(element);

            scope.$watch('ngModel', function(value) {
                toUpdate = value;
            }, true);

            elem.sortable({
                start: function(event, ui) {
                    startIndex =($(ui.item).index());
                },
                stop: function(event, ui) {
                    // on stop we determine the new index of the
                    // item and store it there
                    var newIndex = ($(ui.item).index());
                    var toMove = toUpdate[startIndex];
                    toUpdate.splice(startIndex, 1);
                    toUpdate.splice(newIndex, 0, toMove);

                    // we move items in the array, if we want
                    // to trigger an update in angular use $apply()
                    // since we're outside angulars lifecycle
                    scope.$apply(scope.ngModel);
                },
                axis: 'y'
            });

        }
    };
});