const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require ("dotenv");
const helmet = require ("helmet");
const morgan = require ("morgan");
dotenv.config();
const dbConnect=async()=>{
await mongoose.connect("mongodb+srv://akashdb:Akash123@cluster0.0dof8vc.mongodb.net/test")
console.log("db connected");
}
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})
app.get("/users",(req,res)=>{
    res.send("Welcome to Users")
})

app.listen(8800, ()=>{
    console.log("Backend Server is running");
    dbConnect();
});