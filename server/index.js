const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const route = require('./routes/user-routes')
const authRoute = require('./routes/auth-routes')
const userRoute = require("./routes/user-routes")
const productRoute = require("./routes/product-routes")
const cartRoute = require("./routes/cart-routes")
const orderRoute = require("./routes/order-routes")
const categoryRoute = require("./routes/categories-routes")
const cors = require('cors')


dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connection Established With database")
}).catch((error)=>{
    console.log(error);
})

app.use(express.json())

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/categories",categoryRoute)


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running on port 5000");
})