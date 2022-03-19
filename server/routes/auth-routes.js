const router = require("express").Router()
const User = require("../models/User-model")
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

router.post("/register", async (req, res) => {
    const newUser = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            phone: req.body.phone,
            address: req.body.address,
        }
    );
    try{
        const saveUser = await newUser.save();
        console.log(saveUser);
        res.status(200).json(saveUser);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    try{
        const findUser = await User.findOne({email: req.body.email});
        !findUser && res.status(401).json("Wrong Credentials!"); 
        
        const decrypted = CryptoJS.AES.decrypt(findUser.password, process.env.PASS_SEC);
        const password1 = decrypted.toString(CryptoJS.enc.Utf8);
        password1 !== req.body.password &&
            res.status(401).json("Wrong Credentials");
        const accessToken = jwt.sign({
            id: findUser._id,
            isAdmin: findUser.isAdmin,
        }, process.env.JWT_SEC, {expiresIn: "3d"});
        const { password, ...others} = findUser._doc;

        res.status(200).json({...others, accessToken});
    }
    catch(err){
        res.status(500).json();
    }
})

module.exports = router