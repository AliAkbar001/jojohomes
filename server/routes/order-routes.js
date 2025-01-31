const router = require("express").Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const CryptoJS = require("crypto-js")
const Order = require("../models/Order-model")

//Add order

router.post("/", verifyToken, async(req, res) =>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json({status:200,savedOrder});
    }
    catch(err){
        res.status(500).json({status:500,err});
    }
})

// UPDATE user
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{ new: true });
        res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//Delete order

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been Deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

//GET User Orders

router.get("/find/:userId", async (req, res) => {
  console.log(req.params.userId)
    try{
        const orders = await Order.find({userId: req.params.userId});
        console.log("Order List",orders)
        res.status(200).json({status:200,orders});
    }
    catch(err){
      console.log(err)
        res.status(500).json({status:200, err});
    }
})

// GET ALL 

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router

