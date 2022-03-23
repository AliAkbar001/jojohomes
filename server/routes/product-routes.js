const router = require("express").Router();
const multer = require('multer')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const Product = require("../models/Product-model");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/products/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

const upload = multer({storage:storage})
//CREATE PRODUCT

router.post("/add", verifyTokenAndAdmin, upload.single("productimg"), async (req, res) => {
  // const file = req.files.img;
  // file.mv(`public/${file.name}`, (err) => {
  //   console.error(err);
  //   alert(err);
  // });
  const newProduct = new Product({
    title: req.body.title,
    category: req.body.category,
    color: req.body.color,
    size: req.body.size,
    quantity: req.body.quantity,
    desc: req.body.desc,
    img: req.file.originalname,
    price: req.body.price,
  });
  console.log("***********************************");
  console.log(req.file.originalname);
  console.log("***********************************");
  console.log(req.body);
  console.log("***********************************");

  try {
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.status(200).json(savedProduct);
    // res.status(200).json("file uploaded");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE user
router.put("/:id", verifyTokenAndAdmin, upload.single("productimg"), async (req, res) => {
  try {
    const obj1 = {...req.body, img: req.file.originalname};

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: obj1,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log("check point 222");
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Product BY ID

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL Products

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(9);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/category/:id", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    const  products = await Product.find({"category" : req.params.id});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
