var searchLocation = angular.module('busBash.services',[]);

searchLocation.service('LocationSearchedService', function(){

    var usersSearchLocation = {
        latitude : 0,
        logitude : 0
    };

    return {
        setSearchLocation:function(data){
            usersSearchLocation = data;
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
