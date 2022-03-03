const express=require("express")
const router=express.Router()
const bcrypt = require("bcrypt")
const User=require("../models/UserModel")
router.post("/signin",async (req,res)=>{
    const data=req.body
   const userres= await User.findOne({email:data.email})
   console.log(userres)
   if(userres){
   const authen= await bcrypt.compare(data.password,userres.password)
   if(authen){
       res.send({status:true,msg:"success"})
   }
   else{
    res.send({status:false,msg:"wrong password"})
   }
       
   }
   else{
    res.send({status:false,msg:"email does not exists"})
   }


}
)
module.exports=router