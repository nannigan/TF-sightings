(function()
{
    'use strict';

    angular.module('sightings').controller('RegisterController', RegisterController);

    /** @ngInject */

    function RegisterController($scope, $firebaseObject, fRef)
    {
        var register = this;

        register.message = 'hello worldly folk!';
        var ref = fRef;
        register.createUser = function()
        {
            fRef.createUser(
            {
                email: register.email,
                password: register.password
            }, function(error, userData)
            {
                if (error)
                {
                    console.log("Error creating user:", error);
                }
                else
                {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }
        //form.

        // download the data into a local object
        register.data = $firebaseObject(ref);


    }



})();
