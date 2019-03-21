//passport
const passport= require("passport");

//authentication middleware
function authMiddleware(){
    return(req, res, next)=>{
        console.log(
          `req.session.passport: ${JSON.stringify(req.session.passport)}`
        );
        if(req.isAuthenticated()){ 
            return next();
             
        }else{
            res.redirect("/users/login");
        }
    }
}

module.exports=authMiddleware;

// Testing
// SINON

// Exporting as function for testing purposes



