
//(function () {
//    var module = angular.module("busbash", ["google-maps"]);
//}());


var GoogleMapsController = function($scope, $timeout, $log, LocationSearchedService) {

    console.log('GoogleMapsController');

    // Enable the new Google Maps visuals until it gets enabled by default.
    // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
    //google.maps.visualRefresh = true;

    console.log('hello ' + LocationSearchedService.getSearchLocation().latitude);
    console.log('hello ' + LocationSearchedService.getSearchLocation().longitude);

//    $scope.position.coords.latitude = LocationSearchedService.getSearchLocation().latitude;
//    $scope.position.coords.latitude = LocationSearchedService.getSearchLocation().longitude;

    //console.log( LocationSearchedService.getText());

    //$scope.greeting = {text: LocationSearchedService.getText()};

    $scope.userSearchLocation = LocationSearchedService.getSearchLocation();
    $scope.xCoor = LocationSearchedService.getXCoor();

    console.log('xCoor' + $scope.xCoor);

    $scope.center = {
        latitude: $scope.userSearchLocation.latitude, // initial map center latitude
        longitude: $scope.userSearchLocation.longitude // initial map center longitude
    }
    $scope.markers = [];
    $scope.zoom = 8;



//    angular.extend($scope, {
//        center: {
//            latitude: LocationSearchedService.getSearchLocation().latitude, // initial map center latitude
//            longitude: LocationSearchedService.getSearchLocation().longitude // initial map center longitude
//        },
//        markers: [], // an array of markers,
//        zoom: 8 // the zoom level
//    });

//    angular.extend($scope, {
//
//       position: {
//            coords: {
//                latitude: LocationSearchedService.getSearchLocation().latitude,
//                longitude: LocationSearchedService.getSearchLocation().longitude
//            }
//        },
//
//        /** the initial center of the map */
//        centerProperty: {
//            latitude: 45,
//            longitude: -73
//        },
//
//        /** the initial zoom level of the map */
//        zoomProperty: 4,
//
//        /** list of markers to put in the map */
//        markersProperty: [ {
//            latitude: 45,
//            longitude: -74
//        }],
//
//        // These 2 properties will be set when clicking on the map
//        clickedLatitudeProperty: null,
//        clickedLongitudeProperty: null,
//
//        eventsProperty: {
//            click: function (mapModel, eventName, originalEventArgs) {
//                // 'this' is the directive's scope
//                $log.log("user defined event on map directive with scope", this);
//                $log.log("user defined event: " + eventName, mapModel, originalEventArgs);
//            }
//        }
//    });

    function userLocationsChanged(){
        console.log('location changed');
    }

   // $scope.$watch(LocationSearchedService.getSearchLocation(), userLocationsChanged);

}