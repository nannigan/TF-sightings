(function()
{
    'use strict';

    angular.module('sightings', ['ui.router', 'firebase' , 'ui.bootstrap.datetimepicker'])

   .factory('fRef', fRef)

    function fRef(FIREBASE_URL)
    {
        return new Firebase(FIREBASE_URL);
    }


})();
