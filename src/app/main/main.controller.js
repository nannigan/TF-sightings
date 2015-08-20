(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.message = 'hello worldly folk!';


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
