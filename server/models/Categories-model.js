const mongoose = require('mongoose')

const CategoriesSchema = mongoose.Schema({
    title: {type: String, required: true, unique: true},
    products: {type: Number, required: true, default: 0},
    img: {type: String, required: true},
    status: {type: String, default: "Active"},
}
)

module.exports = mongoose.model("Categories", CategoriesSchema)