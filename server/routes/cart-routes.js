const router = require("express").Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const CryptoJS = require("crypto-js")
const Cart = require("../models/Cart-model")
const { response } = require("express")

//Add Cart

router.post("/", verifyToken, async(req, res) =>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        console.log("Add to cart return value ................");
        console.log(savedCart);
        res.status(200).json({status:200,savedCart});
    }
    catch(err){
        res.status(500).json({status:500,err});
    }
})

// UPDATE user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{ new: true });
        console.log("updated result");
        console.log(updatedCart);
        res.status(200).json(updatedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//Remove item from cart

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Item has been removed from Cart");
    }
    catch(err){
        res.status(500).json(err);
    }
})

//GET Product BY ID

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// GET ALL 

router.get("/", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json(err);
    }
})




module.exports = router

