const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    console.log("token",authHeader);
    if(authHeader){
        
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err){
              res.status(403).json("Token is not valid");
            }
            // console.log("---------------------------------------------------------");
            req.user= user;
            // console.log(req.user);   
            next();
        })
    }
    else{
        return res.status(401).json("You are not authenticated");
    }
}
const verifyTokenAndAuthorization = (req, res, next)=> {
    verifyToken(req, res, () => {
        // console.log("---------------------------------------------------");
        // console.log(req.user.id);
        // console.log("***************************************************");
        // console.log(req.params.id);
        if(req.user.id === req.params.id || req.user.isAdmin){

            console.log("check point 111")
            next();
        }
        else{
            res.status(403).json("You are not allowed to do so");
        }
    });  
}

const verifyTokenAndAdmin = (req, res, next)=> {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You are not allowed to do so");
        }
    }); 
}


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };