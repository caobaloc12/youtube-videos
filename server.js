var express = require('express');
var favicon = require('serve-favicon');
var config = require("./config.js");
var request = require("request");

var app = express();

app.set('views', __dirname + '/views');
app.set('view options', {layout: false});
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function (req, res) {
  var rs = [];
  request(config.host + config.path + "?playlistId=PLHzaLXQZOXlL35RqDZ3VLy5zkM94MTSZs&part=snippet&maxResults=10&key=" + config.googleApiKey, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      rs = JSON.parse(body);
    }
    res.render('index', {title: 'Video view mode example', items: rs.items});
  });
});

app.get('*', function (req, res) {
  res.render('404', {title: 'Page Not Found'});
});

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at ", addr.address + ":" + addr.port);
});
