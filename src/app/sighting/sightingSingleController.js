(function() {
    'use strict';

    angular.module('sightings')
    .controller('SightingSingleController', SightingSingleController);

    /** @ngInject */

    function SightingSingleController($scope, asight){

        var sight = this;

        sight.item = asight;

        asight.$loaded().then(function () {

          sight.data = {
            critter: asight.critter,
            name: asight.name,
            email: asight.email,
            when: asight.when,
            where: asight.where,
            details: asight.details
           };

            sight.lat = sight.data.where.lat;
            sight.lng = sight.data.where.lng;
            sight.wikilink =  "https://en.wikipedia.org/wiki/" + sight.data.critter;




});






       }









})();
