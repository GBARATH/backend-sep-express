const express=require("express")
const router=express.Router()
router.post("/signup",(req,res)=>{
    console.log("inside route")
    const data=req.body
    const userObj=new User({
        username:data.username,
        email:data.email,
        password:data.password,
        area:data.area,
        pincode:data.pincode,
        interests:data.interests
    })
    userObj.save().then(()=>res.send("user added successfully"))
})
module.exports=router
