var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// Static test json
var costElementJson = {
    "costElements": [
        {id: 1, color: '#F44336', costAmount: 123},
        {id: 2, color: '#2196F3', costAmount: 456},
        {id: 3, color: '#FFEB3B', costAmount: 789},
        {id: 4, color: '#4CAF50', costAmount: 675},
        {id: 5, color: '#FF9800', costAmount: 999},
        {id: 6, color: '#FACE00', costAmount: 666}
    ]
}

var costElementArray = [
    {id: 1, color: '#F44336', costAmount: 123},
    {id: 2, color: '#2196F3', costAmount: 456},
    {id: 3, color: '#FFEB3B', costAmount: 789},
    {id: 4, color: '#4CAF50', costAmount: 675},
    {id: 5, color: '#FF9800', costAmount: 999},
    {id: 6, color: '#FACE00', costAmount: 666}
]

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/testJson', function(req, res){
    res.send(costElementJson);
});

app.listen(3000, function(){
    console.log('starting server on Port 3000....');
});