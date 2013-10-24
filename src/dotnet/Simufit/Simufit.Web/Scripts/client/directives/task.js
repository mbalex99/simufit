'use strict';

Application.Directives.directive('task', function () {
    return {
        restrict: 'EA',
        scope: {
            onBlur: '&',
            enterKeyPressed: '&',
            gig: "="
        },
        replace: 'true',
        templateUrl: 'partials/task.html',
        link: function (scope, element, attrs) {
            var elem = $(element);

            var checkBox = elem.find('input[type="checkbox"]');
            var textBox = elem.find('input[type="text"]');

            textBox
                .blur(function (event) {
                    var val = elem.val();
                    scope.onBlur({ message: val });
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
});