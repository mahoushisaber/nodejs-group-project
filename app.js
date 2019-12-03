const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
const helpers = require('handlebars-helpers')
const buttonpress =  [0];
function plus(){
  (buttonpress[0] = buttonpress[0] + 10)
}
function minus(){
  (buttonpress[0] = buttonpress[0] - 5)
}
const hbs = expressHbs.create({

  defaultLayout: 'index',
  layoutsDir: 'views/layouts/',
  partialsDir: ['views/partials/'],
  extname: 'hbs',

  helpers:{}  
})

const app = express();
const routes = require('./routes/index');
app.use(bodyParser.urlencoded({
    extended: true
})); 

app.engine('hbs',hbs.engine);

app.set('views', path.join(__dirname, 'views'));

app.set("view engine","hbs")
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json({limit: '2mb'}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: "monkey"}));
app.use(routes);

app.listen(3000, () =>console.log('listening at 3000'))

module.exports = app;
