// Facebook SDK
Application.Directives.directive('fb', ['facebookService', '$rootScope', function ($FB, $rootScope) {
        return {
            restrict: "E",
            replace: true,
            template: "<div id='fb-root'></div>",
            compile: function(tElem, tAttrs) {
                return {
                    post: function(scope, iElem, iAttrs, controller) {
                        var fbAppId = iAttrs.appId || '';

                        var fb_params = {
                            appId: iAttrs.appId || "",
                            cookie: iAttrs.cookie || true,
                            status: iAttrs.status || false,
                            xfbml: iAttrs.xfbml || true
                        };

                        // Setup the post-load callback
                        window.fbAsyncInit = function() {
                            $FB._init(fb_params);

                            if ('fbInit' in iAttrs) {
                                iAttrs.fbInit();
                            }
                            
                            $FB.getLoginStatus(function(response) {
                                $rootScope.$broadcast('auth.statusChange', response);
                            });
                        };

                        (function(d, s, id, fbAppId) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s);
                            js.id = id;
                            js.async = true;
                            js.src = "//connect.facebook.net/en_US/all.js";
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk', fbAppId));
                    }
                };
            }
        };
    }]);