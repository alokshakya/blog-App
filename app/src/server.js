var express = require('express');
var app = express();

//your routes here
app.get('/', function (req, res) {
    res.send("Hello Alok Shakya now your platform is ready to developement");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
