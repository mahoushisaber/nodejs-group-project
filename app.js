const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
const helpers = require('handlebars-helpers')
const hbs = expressHbs.create({

  defaultLayout: 'index',
  layoutsDir: 'views/layouts/',
  partialsDir: ['views/partials/'],
  extname: 'hbs',

  helpers:{
  list: function(context){
    //let listofquestions=context.questions;
   let listofUsers = context.allusers;
  let questions =context.questions;
   // console.log(listofquestions[0].dataValues.subject);
    let out ="<div>"

    for(let i =0; i < 5;i++){
      out = out+"<div class='questionContent'>"
      for(let y = 0; y <listofUsers.length; y++){
        console.log(questions[y].userId+" "+listofUsers[i].id);
        if(questions[i].userId==listofUsers[y].id){
          out = out+"<div  class='img'>"
          out = out+"<img src="+ listofUsers[y].imageUrl+"></img>"
          out = out+"</div>"
          console.log(listofUsers[y].imageUrl);
          break;
        }
       
      }
 
      //out = out+"<img src="+ listofUsers[0].imageUrl+"></img>"
      out = out+"<div class='questionContent'>"
      out = out+"<span >"+ questions[i].topic+"</span>"  
      out = out+"<h4>"+ questions[i].subject+"</h4>"   
        out = out+"<p >"+ questions[i].details+"</p>"
        out = out +"<div class='dateReply'>"
          out = out +"<span>Replies</span>"
          out = out+"<p>"+ questions[i].createdAt.toISOString().split('T')[0]+"</p>"
          out = out +"</div>"
        out = out+"</div>"
      out = out+"</div>"
      out = out+"</br>"
    }
    out = out+"</div>"
     return out+"</div>"
  }
  }
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
