import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


// app config
const app = express()
const port = 4000


//middleware
app.use(express.json());
app.use(cors())

//DB connection
connectDB(); 

//api end point 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads')) //uploads folder can be reached at this end point 
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter) 
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
}) // request the data from the server

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://AdeebShekh:95804adeebsh@cluster0.zsp1s76.mongodb.net/?