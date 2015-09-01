(function()
{
    'use strict';

    angular.module('sightings').controller('LogoutController', LogoutController);

    /** @ngInject */

    function LogoutController($scope, $firebaseAuth, fRef)
    {
        var logout = this;
        logout.unauth = function()
        {
            fRef.unauth();

        }
    }

})();
