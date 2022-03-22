const express=require("express")
const router=express.Router()
const bcrypt = require("bcrypt")
const User=require("../models/UserModel")
const jwt=require("jsonwebtoken")
router.post("/signin",async (req,res)=>{
    const data=req.body
   const userres= await User.findOne({email:data.email})
  //console.log(userres.password)
   if(userres){
   const authen= await bcrypt.compare(data.password,userres.password)
   console.log(authen)
   if(authen){
      const token= jwt.sign({email:userres.email},"jamesbond",{ expiresIn: 60 * 60 })
      console.log(token)
       res.send({status:true,msg:"success",token:token})
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