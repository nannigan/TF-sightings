(function()
{
    'use strict';

    angular.module('sightings', ['ui.router', 'firebase' , 'ui.bootstrap.datetimepicker'])

    .factory('fRef', fRef)

    // .controller('AppController', AppController);

    function fRef(FIREBASE_URL)
    {
        return new Firebase(FIREBASE_URL);
    }

    // function AppController()
    // {
    //     var app = this;

    //     app.message = 'hello worldly folk!';
    // }
})();
