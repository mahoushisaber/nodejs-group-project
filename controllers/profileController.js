const userdb = require('../models').User;

// const profileCreator1 = (res, next) => {
// Had to block out comment user to make this work
   function  usercreate1(req, res) {
    return userdb.create({
            firstName: "Jonathan ",
            lastName: "Davies",
            email: "JonDavies4@hotmail.com",
            password: "Computer",
        })
        .then(userdb => res.status(201).send(userdb))
        .catch(error => res.status(400).send(error));
    }
    function  userfindUser(req, res) {
        return userdb.findOne({
            email: "JonDavies300@hotmail.com", password: "password"
          })
          .then(userdb => {
            console.log(`Found user: ${userdb.email}`);
            res.end();
          }).catch(error => res.status(400).send(error));
        }
        function  userLogin(req, res) {
           let test=-1;
            userdb.findOne({
                where:{
                    email: "JonDavies30000@hotmail.com", password: "password"
                }
              })
              .then(userdb => {
                
                console.log(`Found user: ${userdb.email}`);
                
              }).catch(userdbd =>{
                userdb.findOne({
                    where:{
                        email: "JonDavies30000@hotmail.com"
                    }
                  }).then(userdb => {
                    console.log(`Password Was Wrong`);
                  }).catch(outcome =>{
                    console.log('Email is wrong')
            });
        });
        res.end();
    }
           
            // return userdb.findOne({
            //     where:{
            //         email: "JonDavies3@hotmail.com", password: "computer"
            //     }
            //   })
            //   .then(userdb => {
            //     console.log(`Found user: ${userdb.email}`);
            //     res.end();
            //   }).catch(error => { console.log("failed");res.status(400).send(error)});
          //  }
    
function  usercreate2(req, res) {
    const newData = {
        about: 'Maxy-boi-boi',
        imageUrl: "alt",
        dob: "2019-09-09",
        country: "Canada",
        };
          
        userdb.update(newData, {where: { email: 'JonDavies4@hotmail.com' } })
        .then(userdb => {
        res.status(201).send(userdb)
        }).catch(error => res.status(400).send(error));
    }

const profileCreaterCancel = (req, res, next) => {
userdb.destroy({where: { email: 'JonDavies2@hotmail.com' } })
.then(userdb => {
  res.status(201).send(userdb)
}).catch(error => res.status(400).send(error));
}
module.exports = {
    usercreate1:usercreate1,
    usercreate2:usercreate2,
    profileCreaterCancel:profileCreaterCancel,
    userfindUser:userfindUser,
    userLogin:userLogin
};

