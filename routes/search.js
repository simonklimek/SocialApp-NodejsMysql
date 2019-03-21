const express = require("express");
const router = express.Router();
const connection = require("../connection/connection");

// data.fullname = '%' + data.fullname + '%';
// return db.query("SELECT * FROM user WHERE fullname LIKE N? ORDER BY create_time DESC LIMIT ?,? ", [data.fullname,data.start,data.limit], callback);

router.get("/search",(req,res)=>{
    //get all the posts
    let $sql ="SELECT * FROM nodemysql.posts WHERE description = ? ORDER BY id DESC";

    //create the query
    let $query = connection.query($sql, (err, result)=>{
        //check for erros
        if(err){
            console.log("-------ERROR: " + err);
        }
        let $posts = [];
        // check if the result is null (connection not created or not reached)
        if(result != null){
            //loop through all the records
            for(let i=0; i < result.length; i++){
                $posts.push(result[i]);  
            }
            //render the view
            res.render("search",{
                posts: $posts     
            });
        }else{
            res.render("search");
        }

    });
  
});
module.exports = router;