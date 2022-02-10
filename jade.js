const express=require("express")
const app=express()
app.set("view engine","pug")
app.get("/welcome",(req,res)=>{
    res.status(200).render("home",{username:"peter",des:"SSE"})
})
app.listen(3001,()=>{
    console.log("server started")
})
