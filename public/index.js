
//API call by coordinates: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={f45810bc17a61b3bd23c98eabbbf081f}


// $(document).ready(function() {


    function success (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

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
        for (var i = currentCity.length; i > 0; i--) {
            if (currentCity[i] === ',') {
        var currentCityShortened = currentCity.slice(i + 2);
        console.log(currentCity[i])
        break;
            }
        }
        for (var i = 0; i < currentCity.length; i++) {
            if (currentCity[i] === ',') {
        var currentArea = currentCity.slice(0, i);
        console.log(currentArea)
        break;
            }
        }
        var currentState = dataSet.observation_location.state;
        var humidity = dataSet.relative_humidity;
        var currentTempCelcius = dataSet.temp_c;
        var currentTemp = dataSet.temp_f;
        var windSpeedMPH = dataSet.wind_mph;
        var windSpeedKPH = dataSet.wind_kph;
        var weatherDescription = dataSet.weather;

//-----------------------------------------------------------//success jquery-->
        if (currentCityShortened) { 
        $('#currentCity').text(`${currentCityShortened}`);
            }

        $('#currentAreaDescription').html(`<h3 style = "font-size: 15px;">Reading from:</h3>`);
        $('#currentState').html(`<h3>${currentState}</h3>`);
        $('#currentArea').html(`<h4>${currentArea}</h4>`);
        // $(`#currentstate`).html(`<h4>Currently: ${currentTemp}</h4>`)
        $('#iconImage').html(`<img src = "${iconURL}"></img>`);
        $('#temp').html(`<h4>Temp: ${currentTemp}</h4>`);

        $('#humidity').html(`<p>Humidity: ${humidity}</p>`);
        $('#windSpeed').text(`Windspeed: ${windSpeedMPH}`);
        $('#windSpeedButton').click(() => {$(`#windSpeed`).text(`Windspeed: ${windSpeedKPH}`) }); 
        $('#windSpeed').text(`Windspeed: ${windSpeedKPH}`);
    
});

}
    function error (err){ 
    console.log(err)
};


navigator.geolocation.getCurrentPosition(success, error);


// });