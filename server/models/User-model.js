const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        name: {type: String},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        phone: {type: String, required: true},
        address: { type: String },
        status:{
            type: String, 
            default: "Active",
        },
        isAdmin:{
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true}
);

module.exports = mongoose.model("User",UserSchema)

