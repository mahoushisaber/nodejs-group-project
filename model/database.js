const mysql = require('mysql');

const createconndb = mysql.createConnection({
    host    : 'knowledgebase.ccuejt1beuqb.us-west-2.rds.amazonaws.com',
    user    : 'admin',
    password : 'webproject',
    database: 'knowledgebase'

});
createconndb.connect(function(error) {
    if(error){
        console.log('error');
        
    } else {
        console.log('Connected');
    }
});

const creatingProfileStepOne = (req,res)=>{
    // const profileFname = req.body.Fname;
    // const profileLname = req.body.Lname;
    // const profileEmail = req.body.email;
    // const profilePassword= req.body.passowrd;
    const profileFname = "Hannah";
    const profileLname =  "Davies";
    const profileEmail =  "HannahDavies@hotmail.com";
    const profilePassword=  "password";
    let sql = "INSERT INTO User (firstName, lastName, email, password) VALUES (?, ?, ?,?)";
    createconndb.query(sql, [profileFname,profileLname,profileEmail,profilePassword],(err,results,fields)=>{
        if(err){
            console.log("Failed to add users: " + err);
            res.sendStatus(500)
            return
        }
        res.end();
    })
}


const creatingProfileStepTwo = (req,res)=>{
    // const profileAbout = req.body.about;
    // const profileImg = req.body.image;
    // const profileDOB = req.body.dob;
    // const profileCountry= req.body.country;
    const profileAbout = "My Name Is Jon";
    const profileImg =  "altimg";
    const profileDOB =  '2019-9-9';
    const profileCountry=  'CA';
    let sql = "UPDATE User SET about=?, imageUrl=?, DOB=?, country=?  ORDER BY idUser DESC LIMIT 1 ";
    createconndb.query(sql, [profileAbout,profileImg,profileDOB,profileCountry],(err,results,fields)=>{
        if(err){
            console.log("Failed to add users: " + err);
            res.sendStatus(500)
            return
        }
        res.end();
    })
}

const cancelProfilecreation = (req,res)=>{

    let sql = "DELETE FROM User ORDER BY idUser DESC LIMIT 1 ";
    createconndb.query(sql, (err,results,fields)=>{
        if(err){
            console.log("Failed to add users: " + err);
            res.sendStatus(500)
            return
        }
        res.end();
    })
}
const checkLogin = (req,res)=>{
    // let profileEmail = req.body.email;
    // let profilePassword= req.body.passowrd;

    const profileEmail =  "HannahDavies@hotmail.com";
    const profilePassword=  "password";
    let errormessage= "";
    let sql = "SELECT email, password  FROM User WHERE email = (?) ";
    createconndb.query(sql,profileEmail, (err,results,fields)=>{
        if(err){
            console.log("Failed to add users: " + err);
            res.sendStatus(500)
            return
        }
     
        if(results.length!= 0){
            if(results[0].email==profileEmail&&results[0].password==profilePassword){
                console.log("Success");
            } else {
      
                if(results[0].email == profileEmail&&results[0].password!=profilePassword){
                    errormessage = "User Password is Wrong";
                } 
            }
        }else {
            errormessage ="User Email Can't Be Found";
        }
        console.log(errormessage);
        res.end();
    })
}

module.exports = {
    creatingProfileStepOne:creatingProfileStepOne,
    creatingProfileStepTwo:creatingProfileStepTwo,
    cancelProfilecreation:cancelProfilecreation,
    checkLogin:checkLogin
  };