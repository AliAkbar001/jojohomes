const router = require('express').Router()
const Categories = require('../models/Categories-model')
const multer =  require('multer')


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/categories/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})

const upload = multer({storage:storage})

router.post("/add", upload.single("catimg"), async (req, res) => {
    const newCategory = new Categories({
        title: req.body.title,
        img: req.file.originalname,
    });
    try{
        const saveCategory = await newCategory.save();
        console.log(saveCategory);
        res.status(200).json(saveCategory);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }

})

router.get("/", async (req, res) => {
    try{
        const categories = await Categories.find();
        res.status(200).json(categories);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router