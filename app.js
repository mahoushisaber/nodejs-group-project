const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
const helpers = require('handlebars-helpers')
const buttonpress= [2];
const visable= [2];
// visable[0]= true;
// visable[1]= "hidden";
// buttonpress[0]=10;
// // buttonpress[1]=0;
// const buttonpress= [2];
buttonpress[0]=0;
buttonpress[1]=0;
const hbs = expressHbs.create({

  defaultLayout: 'index',
  layoutsDir: 'views/layouts/',
  partialsDir: ['views/partials/'],
  extname: 'hbs',

  helpers:{
   //-5 to do the previous 5 discussion
  decrement: function(){
    let five =5;
  // To error check to see if it will go outof bounds or not
  //   if(buttonpress[0]>4){
  //     buttonpress[0]= buttonpress[0]-five;
  // }
    let out;

    out =out+"<input type='button'  name='button_2'  value= 'Back' onclick = " +(buttonpress[0] = buttonpress[0]-5)+"> "
    return out;
  },
  //Adds 5 to do the next 5 discussion
  increment: function(){
    let five =5;
    console.log("Increment");
      // To error check to see if it will go outof bounds or not
    // if(buttonpress[1]>=5){
    //  buttonpress[0]= buttonpress[0]+5;
    // }
    let out;
    out =out+"<input type='submit' id = 'inc1' name='button_1' value= 'Next' onclick = "+  (buttonpress[0] = buttonpress[0]+5)+" action='/'>Next" 
  
  
  
    return out;
  },
  returnButtonpressNumber: function(){
    return buttonpress[0]
  },
  list: function(context){
    //Puts all users into a struct
   let listofUsers = context.allusers;
   //puts all questions into a struct
  let questions =context.questions;
  //Counts how many buttons you have
  buttonpress[1] = questions.length-buttonpress[0];
  // console.log(  buttonpress[1] );

   let out ="<div>"
    if(buttonpress[1]>0){
    //Makes a list of 5 people on screen
    if(buttonpress[1]>4){
      for(let i =(0+buttonpress[0]); i < 5+buttonpress[0];i++){
        out = out+"<div class='questionContent'>"
        for(let y = 0; y <listofUsers.length; y++){
         
          if(questions[i].userId==listofUsers[y].id){
            out = out+"<div  class='img'>"
            out = out+"<img src="+ listofUsers[y].imageUrl+"></img>"
            out = out+"</div>"
            console.log(listofUsers[y].imageUwrl);
            break;
          }
        
        }

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
    //Makes a checks how many people are left in the array  and displays them
    }else {
      console.log("Number left "+buttonpress[1]);
      console.log("Number Press "+buttonpress[0])
      for(let i =(0+buttonpress[0]); i < (buttonpress[1]+buttonpress[0]);i++){
        out = out+"<div class='questionContent'>"
        for(let y = 0; y <listofUsers.length; y++){
           if(questions[i].userId==listofUsers[y].id){
            out = out+"<div class='img'>"
            out = out+"<img src="+ listofUsers[y].imageUrl+"></img>"
            out = out+"</div>"
            console.log(listofUsers[y].imageUrl);
            break;
          }
        
        }

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
    }
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
