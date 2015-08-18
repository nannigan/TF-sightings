(function() {
  'use strict';

  angular
    .module('sightings')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
