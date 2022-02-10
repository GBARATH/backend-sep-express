const express=require("express")
const res = require("express/lib/response")
const path=require("path")
const bodyparser=require("body-parser")

const app=express()
app.use(bodyparser.json())
app.get("/home",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+"/static/index.html"))
})
app.get("/products/:pname/:price",(req,res)=>{
    const data=req.params
    console.log(data)
    if(data.pname==="redmi" && Number(data.price)===10000){
        res.send({price:10000,model:"redmi note pro8"})
    }
    else{
        res.send({price:111,model:"XXX"})
    }
    
})
app.get("/search",(req,res)=>{
   const data=req.query
   if(data.country==="india"&&data.state==="TN"){
       res.send({chennai:"Marina",tanjore:"big temple"})
   }
    res.send("dummy")
})
app.post("/signup",(req,res)=>{
    console.log(req.body)
    if(req.body.email){
        res.send("signup successfull")
    }
    else{
        res.send("enter your email")
    }
})
app.all("*",(req,res)=>res.status(404).send("404 Error"))
app.listen(3001,()=>console.log("server started"))