'use strict';

Application.Directives.directive('gig', function () {
    return {
        restrict: 'EA',
        scope: {
            onBlur: '&',
            enterKeyPressed: '&',
            gig: "=ngModel",
            index: "@",
            remove: "&"
        },
        replace: 'true',
        templateUrl: 'partials/gig.html',
        link: function (scope, element, attrs) {
            var elem = $(element);

            var checkBox = elem.find('input[type="checkbox"]');
            var textBox = elem.find('input[type="text"]');

            textBox
                .blur(function (event) {
                    var val = textBox.val();
                    if (!val) {
                        scope.remove(scope.index);
                    }
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


            scope.$on('focusGig', function(e, index) {
                if (scope.index == index) {
                    textBox.focus();
                }
            });
        }
    };
});