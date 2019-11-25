const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const routes = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));

app.set("view engine","hbs")

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json({limit: '2mb'}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: "monkey"}));
app.use(routes);

app.listen(3000, () =>console.log('listening at 3000'))

module.exports = app;
