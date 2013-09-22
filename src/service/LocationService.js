var searchLocation = angular.module('busBash.services',[]);

searchLocation.service('LocationSearchedService', function(){

    var usersSearchLocation = {
        latitude : 40.934265,
        longitude : -2.988281
    };

    var xCoor = { val:5 };

    return {
        setSearchLocation:function(data){
            usersSearchLocation = data;
            console.log('setting search location to be : ' + usersSearchLocation.latitude + usersSearchLocation.longitude);
        },
        getSearchLocation:function(){
            return usersSearchLocation;
        },
        setXCoor:function(value){
            xCoor = value;
        },
        getXCoor:function(){
            return xCoor;
        },
        setText:function(value){
            tempText = value;
        },
        getText:function(){
            return tempText;
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
