'use strict';

Application.Services.factory('hubProxy',
  ['$rootScope', '$q',
    function ($rootScope, $q) {

        function factory(hubName, startOptions) {

            var deferred = $q.defer();
            var connection = $.hubConnection();
            var proxy = connection.createHubProxy(hubName);

            connection.start(startOptions).done(function () {
                console.log('Connection established.');
                deferred.resolve({
                    connection: connection,
                    invoke: function (methodName, params, callback) {
                        proxy.invoke(methodName, params)
                          .done(function (result) {
                              $rootScope.$apply(function () {
                                  if (callback) {
                                      callback(result);
                                  }
                              });
                          });
                    },
                    on: function (eventName, callback) {
                        proxy.on(eventName, function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    },
                    off: function (eventName, callback) {
                        proxy.off(eventName, function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                    }
                });
            }).fail(function () {
                console.log('Could not connect.');
            });

            return deferred.promise;
        }

        return factory;

    }]);