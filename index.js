//API Key: f45810bc17a61b3bd23c98eabbbf081f
//API call by coordinates: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={f45810bc17a61b3bd23c98eabbbf081f}

$(document).ready(function() {


    function success (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = $("#data").html(`latitude: ${latitude} <br> longitude: ${longitude}`);
   
    console.log(location);

    $.getJSON(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID={f45810bc17a61b3bd23c98eabbbf081f}`,function(a) { 

    console.log(a);
    console.log(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`)

              })

    };

    function error(err) {
      console.warn(`ERROR ${err.code} ${err.message} 'Your location could not be found'`);

    };

console.log(location);

navigator.geolocation.getCurrentPosition(success, error);

$('#data').append("LASDKFJLKASDJF");

})