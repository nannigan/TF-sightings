(function() {
  'use strict';

  angular
    .module('sightings')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);


  }

})();
