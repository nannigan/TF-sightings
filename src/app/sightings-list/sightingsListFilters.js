(function () {
   'use strict';

   angular.module('sightings')
   .filter('notUserDataVersion', notUserDataVersion)
   .filter('limitDataModelLength', limitDataModelLength);

   function notUserDataVersion($state){

    if ($state.current.name == 'my-list'){
      var myList;
      myList = $state.current.name;
      return myList;
    }

  };
  function limitDataModelLength( url,data,x,y ){

    if ($state.current.url == 'url'){
      data = data.slice(x,y);
      return data;
    }

   };


})();
