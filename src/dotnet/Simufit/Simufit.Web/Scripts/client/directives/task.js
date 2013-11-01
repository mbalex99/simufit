'use strict';

Application.Directives.directive('task', ['utility', function (utility) {
    return {
        restrict: 'EA',
        scope: {
            onBlur: '&',
            enterKeyPressed: '&',
            remove: '&',
            gig: "="
        },
        replace: 'true',
        templateUrl: 'partials/task.html',
        link: function (scope, element, attrs) {
            var elem = $(element);

            var checkBox = elem.find('input[type="checkbox"]');
            var textBox = elem.find('input[type="text"]');

            textBox
                .blur(function () {
                    scope.onBlur();
                    elem.removeClass('active');
                })
                .focus(function(event) {
                    elem.addClass('active');
                })
                .keyup(function (event) {
                    if (event.keyCode == 13) {
                        scope.enterKeyPressed();
                    }
                });
            

        }
    };
}]);