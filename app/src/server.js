var express = require('express');
var app = express();

//your routes here

var root= process.cwd();
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
// link on home page sending file
app.get('/', function (req, res) {
  res.sendFile('ui.html',{root});
});
// link on home page sending file



// sending bootstrap css file
app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile('css/bootstrap.min.css',{root});
});
//style.css
app.get('/css/style.css', function (req, res) {
  res.sendFile('css/style.css',{root});
});
//sidebar3.css
app.get('/css/sidebar3.css', function (req, res) {
  res.sendFile('css/sidebar3.css',{root});
});
//sending angular.min.js file
app.get('/js/angular.min.js', function (req, res) {
  res.sendFile('js/angular.min.js',{root});
});
// sending angular route file also include ngRoute in module
app.get('/js/angular-route.min.js', function (req, res) {
  res.sendFile('js/angular-route.min.js',{root});
});
// sending jquery file
app.get('/js/3.2.1-jquery.min.js', function (req, res) {
  res.sendFile('js/3.2.1-jquery.min.js',{root});
});
// sending bootstrap.min.js file
app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile('js/bootstrap.min.js',{root});
});
// sending routing file for different links
app.get('/js/croute.js', function (req, res) {
  res.sendFile('js/croute.js',{root});
});
// sending chome page for home in routing template
app.get('/pages/chome.html', function (req, res) {
  res.sendFile('pages/chome.html',{root});
});
// sending login.html page for home in routing template
app.get('/pages/login.html', function (req, res) {
  res.sendFile('pages/login.html',{root});
});
// sending user image 
app.get('/img/alokslack.jpg', function (req, res) {
  res.sendFile('img/alokslack.jpg',{root});
});
app.get('/img/scroll2.jpg', function (req, res) {
  res.sendFile('img/scroll2.jpg',{root});
});
app.get('/img/scroll1.jpg', function (req, res) {
  res.sendFile('img/scroll1.jpg',{root});
});
/*app.get('/signup', function (req, res) {
  res.sendFile('signup2.html',{root});
});*/
app.get('/signup.css', function (req, res) {
  res.sendFile('signup.css',{root});
});
// send directive template /views/articleInfo.html
app.get('/views/articleInfo.html' , function (req, res) {
  res.sendFile('views/articleInfo.html' ,{root});
});

// send directive template /views/commentInfo.html
app.get('/views/commentInfo.html' , function (req, res) {
  res.sendFile('views/commentInfo.html' ,{root});
});
// send AllArticles controller to the index page
app.get('/js/controllers/AllArticles.js' , function (req, res) {
  res.sendFile('js/controllers/AllArticles.js' ,{root});
});
// send CommentController controller to the index page
app.get('/js/controllers/CommentController.js' , function (req, res) {
  res.sendFile('js/controllers/CommentController.js' ,{root});
});
// send directive file  to be able to display article using directives
app.get('/js/directives/articleInfo.js' , function (req, res) {
  res.sendFile('js/directives/articleInfo.js' ,{root});
});
// send directive file  to be able to display comment using directives
app.get('/js/directives/commentInfo.js' , function (req, res) {
  res.sendFile('js/directives/commentInfo.js' ,{root});
});
// send like button image to be available in article likes
app.get('/img/like.png' , function (req, res) {
  res.sendFile('img/like.png' ,{root});
});
// send articleDisplay.css file to show articles in different styles
app.get('/css/articleDisplay.css' , function (req, res) {
  res.sendFile('css/articleDisplay.css' ,{root});
});
// send commentDisplay.css file to show comment in different styles
app.get('/css/commentDisplay.css' , function (req, res) {
  res.sendFile('css/commentDisplay.css' ,{root});
});
/*
//server ui.html
app.get('/ui.html' , function (req, res) {
  res.sendFile('ui.html' ,{root});
});
*/
//send Add article File
app.get('/js/controllers/AddArticle.js' , function (req, res) {
  res.sendFile('js/controllers/AddArticle.js' ,{root});
});
// send AddArticle.html file
app.get('/pages/AddArticle.html' , function (req, res) {
  res.sendFile('pages/AddArticle.html' ,{root});
});
//send loading img/loading.gif
app.get('/img/loading.gif' , function (req, res) {
  res.sendFile('img/loading.gif' ,{root});
});
//send ngStorage.min.js file
app.get('/js/ngStorage.min.js' , function (req, res) {
  res.sendFile('js/ngStorage.min.js' ,{root});
});
// send both service files auth and data
app.get('/js/services/Auth.js' , function (req, res) {
  res.sendFile('js/services/Auth.js' ,{root});
});
app.get('/js/services/AuthService.js' , function (req, res) {
  res.sendFile('js/services/AuthService.js' ,{root});
});
app.get('/js/services/Data.js' , function (req, res) {
  res.sendFile('js/services/Data.js' ,{root});
});
// send AuthController file
app.get('/js/controllers/AuthController.js' , function (req, res) {
  res.sendFile('js/controllers/AuthController.js' ,{root});
});
// send DataController file
app.get('/js/controllers/DataController.js' , function (req, res) {
  res.sendFile('js/controllers/DataController.js' ,{root});
});
