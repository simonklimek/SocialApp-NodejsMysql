const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var mysql = require('mysql');
var path = require("path");

const connection = require("./connection/connection");

//routes
const index = require("./routes/index");
const addPost = require("./routes/addpost");
const updatePost = require("./routes/editpost");
const show = require("./routes/show");
const deletepost = require("./routes/deletepost");

//users routes
const registration = require("./routes/registration");
const login = require("./routes/login");
const user = require("./routes/user");
const logout = require("./routes/logout");

//express sessions
let session = require('express-session');

//passport and LocalStrategy
let passport= require("passport");
let LocalStrategy = require("passport-local").Strategy;

//bcrypt
//const bcrypt = require("bcrypt");

//static folders that express will use to look for files
//main public folder
app.use(express.static("./public"));
//post image uploads Multer folder
app.use(express.static("./uploads"));
//users avatars upload folder
app.use(express.static("./users/avatars"));

//set the view engine to PUG
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");


//body parser for the params
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//express sessions
//populates a cookie that will help passport to keep track of the user
app.use(session({
    secret: 'truth',
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}));  

//passport session and initialize
app.use(passport.initialize());
app.use(passport.session());


//connect to the database
connection.connect((err)=>{
    if (err){
        console.log("ERROR: " + err);
    }
    // create the database and the table if they dont exist

    let $sql = "CREATE DATABASE IF NOT EXISTS nodemysql ; CREATE TABLE IF NOT EXISTS nodemysql.users (id INT(6) AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), avatar VARCHAR(255), password VARCHAR(255)) ; CREATE TABLE IF NOT EXISTS nodemysql.posts (id INT(6) AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), thumb VARCHAR(255), author VARCHAR(255), FOREIGN KEY (id) REFERENCES nodemysql.users(id))"; 
    let $query = connection.query($sql, (err, result)=>{
        if(err){
            console.log(err);
        }else{
             console.log("DATABASE & TABLE ARE CREATED");
        }    
    });
});


// global property / variable for auth users
// allows us to show or hide things o the front-end based on wether the user is authenticated or not
app.use((req, res, next)=>{
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});


app.get("/", (req, res)=>{
    res.render("home");
});

app.use("/", index);
app.use("/", addPost);
app.use("/", updatePost);
app.use("/", show);
app.use("/", deletepost);
app.use("/", registration);
app.use("/", login);
app.use("/", user);
app.use("/", logout);

//-------- use the LocalStrategy
passport.use(new LocalStrategy (
    //username and password are the name of the fields in the login form
    function(username, password, done){
        //check if data is being passed
        console.log(`
        ----------USERNAME: ${username},
        ----------PASSWORD: ${password}
        `);

        //make sure the user exists on the database
        let $checkUser = "SELECT id, password from nodemysql.users WHERE username = ?";
        let $username = username;
        
        let $queryUser = connection.query($checkUser, [$username], (err, result)=>{
            if(err){
                console.log(err);
                //passport error manager
                done(err);
            }   
            
            // if theres no data or result returns as 0 cancel auth
            if(result == null || result == undefined || result.length === 0){
                console.log("USER NOT FOUND");
                //set auth to false
                done(null, false);
            } else {
                // else the user is in the database
                // now we need to check if the passwords match
                // matching the hashed passwords btw
                let $password = password; // this will be hashed automatically by bcrypt compare function
                let $hash = result[0].password;
                console.log(result[0].password);
                
                 return done(null,{user_id: result[0].id });
                
                
                
                /*$password.compare($hash){
                    //if theyre match auth the user 
                    if(true){
                        console.log("USER FOUND");
                        // this property user_id is created for passport to have it
                        // then we can access it using the req.user.user_id
                        // from the user object created by passport
                        return done(null,{user_id: result[0].id });
                    }else{
                        //else cancel auth
                        return done(null, false);
                    }
                };*/
            }
        });
       
    }
));

app.get('/search',function(req,res){
    ssn = req.session;
    // console.log('in');
    connection.query("SELECT * FROM nodemysql.posts WHERE description LIKE '%" + req.query.search + "%' ORDER BY id DESC", function (err, result, fields) {
      if (err) throw err;
      var response = '';
    //   console.log('in');
      if(result.length > 0) {
        for(var i = 0; i < result.length; i++) {
            
                                        
            response += '<div class="col s12 m12 pins"> <div class="card horizontal hoverable"> <div class="card-image"> <img src="' + result[i].thumb +'" style="height: 200px"></div><div class="card-stacked"> <div class="card-content"><p>' + result[i].description +'</p><p><i>3</i></p></div><div class="card-action"><a href="/posts/' + result[i].id + '">' + result[i].title +'</a></div></div></div></div>';
        }
        res.end(response);
      }
    });
  });

app.listen(4200, () => {
    console.log("listening for traffic on port 4200");
});



