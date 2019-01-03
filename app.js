var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(3000, function(){
    console.log('starting server on Port 3000....');
});