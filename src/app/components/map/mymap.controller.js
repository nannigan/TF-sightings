// (function()
// {
//     'use strict';
//     //check out geofire?
//     angular.module('sightings').controller('MyMapController', MyMapController);

//     /** @ngInject */

//     function MyMapController($scope)
//     {
//         var mymap = this;
//         mymap.message = "hello from mymap "



//         mymap.dropPin = function(evt)
//         {
//             console.log('hello from drop pin');
//             var ll = evt.latLng;
//             console.log(ll.lat());
//             console.log(ll.lng());
//             $scope.where = {
//                 lat: ll.lat(),
//                 lng: ll.lng()
//             };
//             console.log($scope.$parent.where);
//         };
//         // http://ngmap.github.io/drawings.html#/marker-simple#marker-simple
//         // useful for home page disp of multiple positions
//         // $scope.positions = [
//         // {
//         //     lat: 37.7699298,
//         //     lng: -122.4469157
//         // }];
//         // $scope.addMarker = function(event)
//         // {
//         //     var ll = event.latLng;
//         //     $scope.positions.push(
//         //     {
//         //         lat: ll.lat(),
//         //         lng: ll.lng()
//         //     });
//         // }
//         // $scope.deleteMarkers = function()
//         // {
//         //     $scope.positions = [];
//         // };
//         // $scope.showMarkers = function()
//         // {
//         //     for (var key in $scope.map.markers)
//         //     {
//         //         $scope.map.markers[key].setMap($scope.map);
//         //     };
//         // };
//         // $scope.hideMarkers = function()
//         // {
//         //     for (var key in $scope.map.markers)
//         //     {
//         //         $scope.map.markers[key].setMap(null);
//         //     };
//         // };









//     }

// })();
