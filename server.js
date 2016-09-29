var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/first', function (req, res) {
  res.send(" REQUEST FIRST  RECEIVED");
});

app.get('/second', function (req, res) {
  res.send("REQUEST SECOND  RECEIVED");
});

app.get('/third', function (req, res) {
  res.send("REQUEST TTHIRD  RECEIVED");
});

app.get('/htfirst', function (req, res) {
  res.sendFile(path.join(_dirname,  'ui','first1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
