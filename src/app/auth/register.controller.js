(function()
{
    'use strict';

    angular.module('sightings').controller('RegisterController', RegisterController);

    /** @ngInject */

    function RegisterController($scope, $firebaseObject, fRef, $location)
    {
        var register = this;

        //var ref = fRef;

        register.createUser = function()
        {
            fRef.createUser(
            {   email: register.email,
                password: register.password
            }, function(error, userData)
            {   if (error)
                {
                    console.log("Error creating user:", error);
                }
                else
                {
                    console.log("Successfully created user account with uid:", userData.uid)

               }
            });
        $location.path('/login');

    };


    // download the data into a local object
    register.data = $firebaseObject(fRef);
    console.log(register.data);


}



})();
