var searchLocation = angular.module('busBash.services',[]);

searchLocation.service('LocationSearchedService', function(){

    var usersSearchLocation = {
        latitude : 45,
        longitude : -73
    };

    return {
        setSearchLocation:function(data){
            usersSearchLocation = data;

            console.log('setting search location to be : ' + usersSearchLocation.latitude + usersSearchLocation.longitude);
        },
        getSearchLocation:function(){
            return usersSearchLocation;
        }
    }
});

//angular.module('busBash.services',[]).
//    value('getGreetings',{
//        greet:function(){
//            return 'greeting you!';
//        }
//    });

//locationModule.service('LatLng', function(){
//    var latitude = '';
//    var longitude = '';
//
//    return 'hello';
//
//});
