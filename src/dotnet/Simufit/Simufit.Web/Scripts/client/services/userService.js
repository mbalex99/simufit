'use strict';

Application.Services.factory('userService', ['$rootScope', '$q' ,function($rootScope, $q) {

    var connection = null;
    var initialize = function() {
        var deferred = $q.defer();
        connection = $.hubConnection();
        var proxy = connection.createHubProxy('usersHub');

        proxy.on('gotClaims', function (user) {
            $rootScope.$broadcast('gotClaims', user);
        });

        connection.start().done(function() {
            console.log("Done connecting to usersHub connection id of" + connection.id);
            deferred.resolve(proxy);
        }).fail(function() {
            console.log("Error connecting to usersHub");
            deferred.reject();
        });

        
        return deferred.promise;
    };    

    return {
        initialize: initialize
    };
}]);