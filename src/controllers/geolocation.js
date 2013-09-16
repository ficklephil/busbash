function GeoLocationController($scope){
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

        //postToApi('philip', position.coords.latitude, position.coords.longitude);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

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
