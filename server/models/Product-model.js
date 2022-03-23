const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        desc: {type: String, required: true},
        category: {type: String, required: true},
        img: {type: String, required: true},
        size: {type: String},
        color: {type: String},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema)
