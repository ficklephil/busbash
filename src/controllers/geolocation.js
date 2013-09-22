//var GeoLocationController = function($scope, LocationSearchedService){
//    $scope.locateUserViaGPS = function(){
//        console.log('LocateUserViaGPS' + LocationSearchedService.getSearchLocation().latitude);
//    }
//}

function GeoLocationController($scope, LocationSearchedService){
    $scope.locateUserViaGPS = function(){
        console.log('hello bean');

        if (navigator.geolocation) {
            var timeoutVal = 10 * 1000 * 1000;
            navigator.geolocation.getCurrentPosition($scope.displayPosition, $scope.displayError,
                { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
            );
        }
        else {
            alert("Geolocation is not supported by this browser");
        }

        //once we have the user location we tell someone to set a model and then
        //place the point on the map
    }

    $scope.displayPosition = function(position) {
        //alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
        console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);

        //probably doesn't work here cause it's not in the same controller


//        $scope.center = {
//            latitude: position.coords.latitude,
//            longitude: position.coords.longitude
//        };

        //$scope.apply();

        $scope.locationSearchService = LocationSearchedService;

        var usersSearchLocation = {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        };

        LocationSearchedService.setText('Hello')
        LocationSearchedService.setXCoor(position.coords.latitude);
        LocationSearchedService.setSearchLocation(usersSearchLocation);


        //console.log('mapProperties' + LocationModule.LatLng());
        //postToApi('philip', position.coords.latitude, position.coords.longitude);
        //var lat = position.coords.latitude;
        //var lng = position.coords.longitude;
//        angular.extend($scope, {
//            centerProperty: {
//                latitude: position.coords.latitude, // initial map center latitude
//                longitude: position.coords.longitude // initial map center longitude
//            },
//            markers: [], // an array of markers,
//            zoom: 8 // the zoom level
//        });

        //so over here we call the service

        //service.setLatLng();


//        $scope.apply({$scope.zoom = 14})
//        angular.extend($scope, {
//
//            position: {
//                coords: {
//                    latitude: position.coords.latitude,
//                    longitude: position.coords.longitude
//                }
//            }
//        });


//        $scope.position = {
//            coords: {
//                latitude: position.coords.latitude,
//                longitude: position.coords.longitude
//            }
//        }

        //sendLocationViaWebSocket(lat, lng);
    }

    $scope.displayError = function(error) {
        var errors = {
            1: 'Permission denied',
            2: 'Position unavailable',
            3: 'Request timeout'
        };
        alert("Error: " + errors[error.code]);
    }
}
