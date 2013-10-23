Application.Services.factory('facebookService', ['$rootScope', function($rootScope) {
 
    var fbLoaded = false;
 
    // Our own customisations
    var _fb = {
        loaded: fbLoaded,
        _init: function(params) {
            if (window.FB) {
                // FIXME: Ugly hack to maintain both window.FB
                // and our AngularJS-wrapped $FB with our customisations
                angular.extend(window.FB, _fb);
                angular.extend(_fb, window.FB);

                // Set the flag
                _fb.loaded = true;

                // Initialise FB SDK
                window.FB.init(params);

                window.FB.Event.subscribe('auth.statusChange', function(response) {
                    $rootScope.$broadcast('auth.statusChange', response);
                });

                if (!$rootScope.$$phase) {
                    $rootScope.$apply();
                }
            }
        }
    };
 
    return _fb;
}]);