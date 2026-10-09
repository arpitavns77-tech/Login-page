const express = require("express");
const { dbconnection } = require("./Models/db");
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./Models/db')
const AuthRouter = require("./Routes/AuthRouter.js")
const ProductRouter = require("./Routes/ProductRouter.js")

app.use(express.json())





const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("hello")
})

// app.use(bodyParser.json())
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);


app.post("/student-insert",async(req,res)=>{
let myDB = await dbconnection();
    let studentcollection = myDB.collection("Info")
    let {name,email,password,buldyear} = req.body;
    let obj = {name,email,password,buldyear}
    let insertRes = await studentcollection.insertOne(obj)

    let resobj = {
        student:1,
        msg:"data insert",
        insertRes
    }
    res.send(resobj)
})

dbconnection();

app.listen(PORT,() =>{
    console.log(`server running on ${PORT}`)
})
