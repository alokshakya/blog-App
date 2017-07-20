var express = require('express');
var app = express();

//your routes here

var root= process.cwd();
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
app.get('/', function (req, res) {
  res.sendFile('index.html',{root});
});
app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile('css/bootstrap.min.css',{root});
});
app.get('/css/style.css', function (req, res) {
  res.sendFile('css/style.css',{root});
});
app.get('/css/sidebar3.css', function (req, res) {
  res.sendFile('css/sidebar3.css',{root});
});
app.get('/js/angular.min.js', function (req, res) {
  res.sendFile('js/angular.min.js',{root});
});
app.get('/js/angular-route.min.js', function (req, res) {
  res.sendFile('js/angular-route.min.js',{root});
});
app.get('/js/3.2.1-jquery.min.js', function (req, res) {
  res.sendFile('js/3.2.1-jquery.min.js',{root});
});
app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile('js/bootstrap.min.js',{root});
});
app.get('/js/croute.js', function (req, res) {
  res.sendFile('js/croute.js',{root});
});
app.get('/pages/chome.html', function (req, res) {
  res.sendFile('pages/chome.html',{root});
});