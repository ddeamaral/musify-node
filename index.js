var express = require('express');
let app = express();

var port = process.env.port || 3000;


// turn on view engine
app.set('view engine', 'ejs');

// set the static directories that are browsable for client
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/test/about');
});

app.listen(port, 'localhost', function(){
    console.log("listening for requests at localhost:3000/");
});