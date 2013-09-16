var map;

function initialize() {
    var lat = 51.46310355210425;
    var lng = -0.36240399999992734;

    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 15,
        sensors:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,

        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.BOTTTOM_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        }
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);