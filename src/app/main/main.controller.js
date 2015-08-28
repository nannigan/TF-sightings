(function() {
  'use strict';

  angular
    .module('sightings')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state,sightingsDataFactory) {
    var main = this;

    main.message = 'hello worldly folk!';
    var subset = function(data,x,y){
      data.splice(x,y);
    };
    main.sightingsData = sightingsDataFactory;
    console.log(main.sightingsData);
    // main.sightingsData = subset(app.sightingsData,0,2);

     //     { vm.myList = $state.current.name;}
     //   //filter

       // if ($state.current.url == '/')
       //  {vm.sightingsData = vm.sightingsData.slice(0,2)}
      //filter


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
