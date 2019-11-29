const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
var Handlebars = require('handlebars');

const app = express();
const routes = require('./routes/index');
app.use(bodyParser.urlencoded({
    extended: true
})); 

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

Handlebars.registerHelper('xIf', function (lvalue, operator, rvalue, options) {

  var operators, result;

  if (arguments.length < 3) {
      throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }

  if (options === undefined) {
      options = rvalue;
      rvalue = operator;
      operator = "===";
  }

  operators = {
      '==': function (l, r) { return l == r; },
      '===': function (l, r) { return l === r; },
      '!=': function (l, r) { return l != r; },
      '!==': function (l, r) { return l !== r; },
      '<': function (l, r) { return l < r; },
      '>': function (l, r) { return l > r; },
      '<=': function (l, r) { return l <= r; },
      '>=': function (l, r) { return l >= r; },
      'typeof': function (l, r) { return typeof l == r; }
  };

  if (!operators[operator]) {
      throw new Error("'xIf' doesn't know the operator " + operator);
  }

  result = operators[operator](lvalue, rvalue);

  if (result) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});

app.engine('hbs',expressHbs ({
    defaultLayout: 'index',
    layoutsDir: 'views/layouts/',
    partialsDir: ['views/partials/'],
    extname: 'hbs'
  }),
  
  'handlebars', expressHbs({
    helpers: {
      // Function to do basic mathematical operation in handlebar
      math: function (lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
          "+": lvalue + rvalue,
          "-": lvalue - rvalue,
          "*": lvalue * rvalue,
          "/": lvalue / rvalue,
          "%": lvalue % rvalue
        }[operator];
      }
    }
  })
);
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

app.listen(4000, () =>console.log('listening at 3000'))

module.exports = app;








// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const expressHbs = require('express-handlebars');

// const app = express();
// const routes = require('./routes/index');

// app.use(bodyParser.urlencoded({
//     extended: true
// })); 

// app.engine('hbs',expressHbs ({
//   helpers: {
//     test: function () { return "Lorem ipsum" },
//     json: function (value, options) {
//         return JSON.stringify(value);
//     }
// },
//     defaultLayout: 'index',
//     layoutsDir: 'views/layouts/',
//     partialsDir: ['views/partials/'],
//     extname: 'hbs'
//   })
// );
// app.set('views', path.join(__dirname, 'views'));

// app.set("view engine","hbs")
// app.set('views', 'views');

// app.use(express.static(path.join(__dirname,'public')));

// app.use(express.json({limit: '2mb'}));

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(session({secret: "monkey"}));
// app.use(routes);


// app.listen(3000, () =>console.log('listening at 3000'))

// module.exports = app;
