(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('SightingController', SightingController);

  /** @ngInject */
  function SightingController( sightingsDataFactory) {
    var sighting = this;
    var sight = {};
    // will be by firebases id
     sight = {
        where: sightingsDataFactory.where,
        when: sightingsDataFactory.when,
        critter: sightingsDataFactory.critter,
        user: sightingsDataFactory.user.id,
        username: sightingsDataFactory.user.name
        }

        sighting.sight = sight;
  }
})();
