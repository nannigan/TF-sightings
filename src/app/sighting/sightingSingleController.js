(function() {
    'use strict';

    angular.module('sightings')
    .controller('SightingSingleController', SightingSingleController);

    /** @ngInject */

    function SightingSingleController($scope, asight){

        var sight = this;

        sight.item = asight;

        console.log(sight.item);


       }









})();
