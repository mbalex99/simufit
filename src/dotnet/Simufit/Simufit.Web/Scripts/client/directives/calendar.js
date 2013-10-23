'use strict';

Application.Directives.directive('calendar', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var elem = $(element);

            elem.fullCalendar({
                weekends: false // will hide Saturdays and Sundays
            });
        }
    };
});