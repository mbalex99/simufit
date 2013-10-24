'use strict';

Application.Directives.directive('calendar', function() {
    return {
        restrict: 'EAC',
        link: function(scope, element, attrs) {
            var elem = $(element);

            elem.fullCalendar({
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'today,month,agendaWeek,agendaDay'
                },
                weekends: true // will hide Saturdays and Sundays
            });
        }
    };
});