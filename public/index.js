
//API call by coordinates: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&APPID={f45810bc17a61b3bd23c98eabbbf081f}


$(document).ready(function() {


    function success (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $.get('/wundergroundInfo', {latitude, longitude}) 
    .then(d => { 
        d = JSON.parse(d);
        var dataSet = d.current_observation;
        console.log(dataSet);
        var iconURL = dataSet.icon_url;
        var currentCity = dataSet.observation_location.city;
        for (var i = currentCity.length; i > 0; i--) {
            if (currentCity[i] === ',') {
        var currentCityShortened = currentCity.slice(i + 2);
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
        var uv = Number(dataSet.UV);
        var uvArray = [null,"#289500","#289500","#F7E400","#F7E400","#F7E400","#F85900","#F85900","#D80010","#D80010", "#6B49C8"];
        var currentUvColor = uvArray[uv];
        var feelsLikeF = dataSet.feelslike_f;
        var feelsLikeC = dataSet.feelslike_c;
        var humidity = dataSet.relative_humidity;
        var currentTempCelcius = dataSet.temp_c;
        var currentTemp = dataSet.temp_f;
        var windSpeedMPH = dataSet.wind_mph;
        var windSpeedKPH = dataSet.wind_kph;
        var windDirection = dataSet.wind_dir;
        var pressure = dataSet.pressure_in;
        var weatherDescription = dataSet.weather;
        var visibilityMPH = dataSet.visibility_mi;
        var visibilityKPH = dataSet.visibility_km;
        var windChillC = dataSet.windchill_c;
        var windChillF = dataSet.windchill_f;
        var iconDesc = dataSet.icon;
        
if (currentUvColor != null) {
    $("#uv").css("background-color", `${currentUvColor}`)
}
else if (currentUvColor == null) {
    $("#uv").css("background-color", "#289500")
}

console.log(currentUvColor);


//BACKGROUND//


        if(iconDesc === "cloudy") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/partlycloudy.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Kettle_Creek_State_Park_vista.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/tstorms.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/167915/pexels-photo-167915.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/sunny.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Cidade_da_Horta,_vista_parcial_do_cimo_do_Miradouro_de_Nossa_Senhora_da_Concei%C3%A7%C3%A3o,_concelho_da_Horta,_ilha_do_Faial,_A%C3%A7ores,_Porttugal.JPG)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/snow.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/1/13/Nature_landscape_snowing_mountains_village_Austria_(8279714859).jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/sleet.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/a/a7/Sleet.JPG)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/rain.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/partlysunny.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/f/f2/Flickr_-_Nicholas_T_-_Partly_Sunny.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/partlycloudy.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/f/f2/Flickr_-_Nicholas_T_-_Partly_Sunny.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/mostlysunny.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/mostlycloudy.gif") {
    $('body').css('background-image', "url(https://www.goodfreephotos.com/albums/sky-and-clouds/sunlight-streaming-above-the-clouds.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/hazy.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/31133/pexels-photo-31133.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/fog.gif") {
    $('body').css('background-image', "url(https://www.goodfreephotos.com/albums/united-states/california/san-francisco/fog-and-mist-over-san-francisco-california.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/flurries.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/42267/photographer-snowstorm-snow-winter-42267.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/clear.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Cidade_da_Horta,_vista_parcial_do_cimo_do_Miradouro_de_Nossa_Senhora_da_Concei%C3%A7%C3%A3o,_concelho_da_Horta,_ilha_do_Faial,_A%C3%A7ores,_Porttugal.JPG)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/chancetstorms.gif") {
    $('body').css('background-image', "url(https://coclouds.com/wp-content/uploads/2013/06/passing-thunderstorm-pink-sunset-2013-06-29.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/chancesnow.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/54206/pexels-photo-54206.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/chancesleet.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/0/03/RhB_ABe_8-12_Langwieser_Viadukt.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/chancerain.gif") {
    $('body').css('background-image', "url(http://www.pixnio.com/free-images/2017/03/15/2017-03-15-18-08-46.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/chanceflurries.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/42267/photographer-snowstorm-snow-winter-42267.jpeg)" );
}
//--------------------------------night---------------------------//

if(iconURL === "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_tstorms.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/28774/pexels-photo-28774.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_sunny.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/127634/pexels-photo-127634.jpeg)");
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_snow.gif") {
    $('body').css('background-image', "url(http://www.publicdomainpictures.net/pictures/30000/velka/night-snow.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_sleet.gif") {
    $('body').css('background-image', "url(http://www.publicdomainpictures.net/pictures/30000/velka/night-snow.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_rain.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/5/58/Rain-drops.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_partlysunny.gif") {
    $('body').css('background-image', "url(https://upload.wikimedia.org/wikipedia/commons/f/f2/Flickr_-_Nicholas_T_-_Partly_Sunny.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_mostlysunny.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/127634/pexels-photo-127634.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_hazy.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/196920/pexels-photo-196920.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_fog.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/1068/lights-night-dark-industry.jpg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_flurries.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/42267/photographer-snowstorm-snow-winter-42267.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_clear.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/127634/pexels-photo-127634.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_chancesnow.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_chancesleet.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_chancerain.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}
if(iconURL === "http://icons.wxug.com/i/c/k/nt_chanceflurries.gif") {
    $('body').css('background-image', "url(https://static.pexels.com/photos/111263/pexels-photo-111263.jpeg)" );
}


//-----------------------------------------------------------//success jquery-->


        var htmlf = `${currentTemp}°<span style = "font-size: 15px;">F</span>`;
        var htmlc = `${currentTempCelcius}°<span style = "font-size: 15px;">C</span>`;
        if (currentCityShortened) { 
        $('#currentCity').text(`${currentCityShortened}`);
            }
        $('#weather-location').html(`<h3 style = "font-size: 11px;">Reading From:</h3>`);
        $('#currentState').html(`${currentState}`);
        $('#currentArea').html(`${currentArea}`);
        $('#iconImage').html(`<img src = "${iconURL}"></img>`);
        $('#weather-description').text(`${weatherDescription}`);
        $('#temp').html(htmlf);
        $('#feelsLikeF').text(`${feelsLikeF}`)
        $('#windSpeed').html(`${windSpeedMPH} <span style = "font-size: 10px;">MPH ${windDirection} </span>`);
        $('#humidity').text(`${humidity}`);
        $('#uv').text(`${uv}`);
        $('#visibility').html(`${visibilityMPH} <span style = "font-size: 10px;">mi</span>`)
        if (windChillF != "NA") {
        $('#windChill').html(`${windChillF}°F`)
    }
    else if (windChillF == "NA") {
        $('#windChill').html(`${windChillF}`)
    }
        $(`#pressure`).html(`${pressure}"`);

        $('#toggle-c').click(function(){
            $('#temp').html(htmlc).fadeIn("slow");
            $('#windSpeed').html(`${windSpeedKPH} <span style = "font-size: 10px;">KPH ${windDirection} </span>`).fadeIn(100);
            $('#visibility').html(`${visibilityKPH} <span style = "font-size: 10px;">km</span>`)
            if (windChillC != "NA") {
            $('#windChill').html(`${windChillC}°C`)
        }
            });
        $('#toggle-f').click(function(){ 
            $('#temp').html(htmlf).fadeIn("slow");
            $('#windSpeed').html(`${windSpeedMPH} <span style = "font-size: 10px;">MPH ${windDirection} </span>`).fadeIn(100);
            $('#visibility').html(`${visibilityMPH} <span style = "font-size: 10px;">mi</span>`);
            $('#windChill').html(`${windChillF}°F`);
            if (windChillF != "NA") {
                $('#windChill').html(`${windChillF}°F`);
            }
            else if (windChillF == "NA") {
                $('#windChill').html(`${windChillF}`);
            }
})
})

} //SUCCESS//
    function error (err){ 
    console.log(err)
};


navigator.geolocation.getCurrentPosition(success, error);


});