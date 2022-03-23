const mongoose = require("mongoose")

const CartSchema = mongoose.Schema(
    {
        userId: {type: String, required:true},
        products: [
            {
                productId: {
                    type: String,
                },
                quantity:{
                    type: Number,
                    default: 1,
                },
                price:{
                    type: Number,
                },
            },
        ],
        status: {type: String, default: 'incart'}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Cart",CartSchema)