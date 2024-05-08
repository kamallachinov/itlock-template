const cors = require("cors")
const express  = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const e = require("cors")
dotenv.config()
const app = express()

const {Schema} = mongoose

const productSchema = new Schema({
 imgUrl:   {type:String,required:true},
  title:  {type:String,required:true},
  subTitle:{type:String,required:true}

},{timestamps:true})
app.use(cors())
app.use(bodyParser.json())

const Products = mongoose.model("template_exam",productSchema)


app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})


//getting all datas
app.get("/products",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})
//get data by id
app.get("/products/:id",(req,res)=>{
    const {id} = req.params
    Products.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }else{
                res.status(501).json("Couldnt find data")
            }
        }else{
            res.status(404).json({message:err})
        }
    })
})
//delete data from DB
app.delete("/products/:id",(req,res)=>{
    const {id}= req.params
    Products.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Deleted data")
        }
    })

})


//POST DATA TO DB
app.post("/products",(req,res)=>{
    const myObj = new Products();
    myObj.imgUrl=  req.body.imgUrl;
    myObj.title =  req.body.title,
    myObj.subTitle=req.body.subTitle
    myObj.save()
    res.send("data created")
})


const url = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT
mongoose.set('strictQuery', false);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DATABASE CONNECTED");
        app.listen(PORT,()=>{
            console.log("server started");
        })
    }
})