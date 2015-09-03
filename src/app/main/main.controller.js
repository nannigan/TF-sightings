(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($firebaseArray, sightingFactory,FIREBASE_URL_SIGHTINGS) {
    var main = this;

    main.message = 'hello worldly folk!';




  main.sightingArray = sightingFactory.sightingArr();
   // main.sightingsData = main.sightingsData.slice(0,2);

   var ref = new Firebase(FIREBASE_URL_SIGHTINGS);
    // create a query for the most recent 5 messages on the server
    var query = ref.orderByChild("timestamp").limitToLast(5);
    // the $firebaseArray service properly handles database queries as well
    main.filteredsightings = $firebaseArray(query);


    console.log(main.filteredsightings);


    //$timeout, webDevTec vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1439854438986;
    //vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }
//http://codeseven.github.io/toastr/demo.html
    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
