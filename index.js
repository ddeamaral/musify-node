var express = require('express');
let app = express();



// turn on view engine
app.set('view engine', 'ejs');

// set the static directories that are browsable for client
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000, 'localhost', function(){
    console.log("listening for requests at localhost:3000/");
});