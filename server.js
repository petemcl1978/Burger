var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//serve static contect for app from public directory

app.use(express.static(process.cwd() + '/public'));
//app.Use(EXPRESS.STATIC('public'));

//parse application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//Handelbars
var exphbs = require('express-handlebars');
app.engine('handlebars' , exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js')
app.use('/',router);

//open server
var port =process.env.PORT ||3000;
app.listen(port);