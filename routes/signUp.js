const express=require("express")
const router=express.Router()
const bcrypt = require("bcrypt")
const User=require("../models/UserModel")
router.post("/signup",async (req,res)=>{
    console.log("inside route")
    const data=req.body
    data.password=await bcrypt.hash(data.password,6)
    const userObj=new User({
        username:data.username,
        email:data.email,
        password:data.password,
        area:data.area,
        pincode:data.pincode,
        interests:data.interests
    })
    await userObj.save().then(()=>res.send("user added successfully"))
})
module.exports=router
