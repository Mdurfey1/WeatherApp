//API Key: f45810bc17a61b3bd23c98eabbbf081f
//API call by coordinates: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={f45810bc17a61b3bd23c98eabbbf081f}
//google geocoding api key: AIzaSyCBsKbxElw71tJeEaGD6HSLVsDXM0WdTV8

$(document).ready(function() {


    function success (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // var location = $("#data").html(`latitude: ${latitude} <br> longitude: ${longitude}`);
    // var weatherURL = "http://api.wunderground.com/api/693a7e57a6eba40b/geolookup/q/" + latitude + "," + longitude + ".json";

// console.log(`latitude: ${latitude}`);
// console.log(`longitude: ${longitude}`);
    // $.get(weatherURL);
    $.get('/wundergroundInfo', {latitude, longitude}) 
    .then(d => { 
        console.log(d)
        d = JSON.parse(d);
        var dataSet = d.current_observation;
        console.log(dataSet);
        var uv = Number(dataSet.UV);
        var uvArray = [null,"#289500","#289500","F7E400","F7E400","F7E400","F85900","F85900","D80010","D80010", "6B49C8"];
        var currentUvColor = uvArray[uv];
        console.log(currentUvColor);
        var feelsLikeF = dataSet.feelslike_f;
        var feelsLikeC = dataSet.feelslike_c;
        var iconURL = dataSet.icon_url;
        var currentCity = dataSet.observation_location.city;
        var currentCityShortened = currentCity.slice(currentCity.indexOf(',') + 2)
        var currentState = dataSet.observation_location.state;
        var humidity = dataSet.relative_humidity;
        var currentTempCelcius = dataSet.temp_c;
        var currentTemp = dataSet.temp_f;
        var windSpeedMPH = dataSet.wind_mph;
        var windSpeedKPH = dataSet.wind_kph;
        var weatherDescription = dataSet.weather;
        });

        if (currentCityShortened) { 
        $('#currentCity').text(`${currentCityShortened}`);
            }
        $('#windSpeed').text(`Windspeed: ${windSpeedMPH}`);
        $('#windSpeedButton').click(() => {$(`#windSpeed`).text(`Windspeed: ${windSpeedKPH}`) }); 
        $('#windSpeed').text(`Windspeed: ${windSpeedKPH}`);
        $('#currentArea').text(`${currentArea}`);
        $('#currentState').text(`${currentState}`);
        $('#humidity').text(`Humidity: ${humidity}`);
        $('#iconImage').html(`src = "${iconURL}"`);
        $('#temp').text(`Temp: ${currentTemp}`);

    
}

function error (err){ 
    console.log(err)
};

navigator.geolocation.getCurrentPosition(success, error);


});