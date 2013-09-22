angular.module('busBash', ['busBash.services' ]).run(function(LocationSearchedService){
 console.log('hello' + LocationSearchedService.getSearchLocation().latitude);
    //so lets get a service



})

//var GeoLocationController = function($scope, Location){
//    $scope.locateUserViaGPS = function(){
//        console.log('LocateUserViaGPS' + Location.getProperty());
//    }
//}