var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

var request = require('request');

app.get('/wundergroundInfo', function(req, res){
  var coords = req.query;
  console.log(coords);
  var weatherURL = `http://api.wunderground.com/api/693a7e57a6eba40b/conditions/q/${coords.latitude},${coords.longitude}.json`;

request(weatherURL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

res.send(response.body);

})

});

app.listen(3000, function () {

  console.log('Example app listening on port 3000!');
  
});

