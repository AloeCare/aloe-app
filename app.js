var express = require('express');
var app = express();

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/styles',  express.static(__dirname + '/styles'));
app.use('/scripts',  express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(3070, function() {
  console.log('Node server running @ http://localhost:3070')
});
