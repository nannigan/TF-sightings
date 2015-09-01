(function()
{
    'use strict';

    angular.module('sightings').controller('LoginController', LoginController);

    /** @ngInject */

    function LoginController($scope, $firebaseAuth, fRef, $stateProvider, $state)
    {
        var login = this;
        login.logInUserForm = logInUserForm;

        login.authWithPassword = function()
        {
            fRef.authWithPassword(
                {
                    email: login.email,
                    password: login.password
                }, function(error, authData)
                {
                    if (error)
                    {
                        console.log("Login Failed!", error);
                    }
                    else
                    {
                        console.log("Authenticated successfully with payload:", authData);
                        login.logInUserForm.$setPristine();
                       $state.go('/');
                    }
            });
          };
        login.authObj = $firebaseAuth(fRef);

}

})();
