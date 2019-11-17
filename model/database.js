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
    const profileFname = "Jon";
    const profileLname =  "Davies";
    const profileEmail =  "JonDavies@hotmail.com";
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

module.exports = {
    creatingProfileStepOne:creatingProfileStepOne,
    creatingProfileStepTwo:creatingProfileStepTwo
  };