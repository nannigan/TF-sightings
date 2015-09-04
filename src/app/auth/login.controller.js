(function()
{
    'use strict';

    angular.module('sightings').controller('LoginController', LoginController);
//https://www.firebase.com/docs/web/api/firebase/authwithpassword.html
    /** @ngInject */

    function LoginController($rootScope, $firebaseAuth, fRef, $location)
    {
        var login = this;
        var ref = fRef;
        login.auth = $firebaseAuth(ref);

///set ng-hide on log-in button using logged-in attr
    login.auth.$onAuth(function() {
      $rootScope.loggedin = true;
    });
        login.login = function()
        {
            login.authData = null;
            login.error = null;

            ref.authWithPassword(
            {
                "email": login.email,
                "password": login.password
            }, function(error, authData)
            {
                if (error)
                {
                    console.log("Login Failed!", error);
                }
                else
                {
                    console.log("Authenticated successfully with payload:", authData.uid);
                }

            });

        };

        $location.path('/');
        console.log('yay');
    }

})();
