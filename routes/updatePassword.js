const express=require("express")
const router=express.Router()
const bcrypt = require("bcrypt")
const User=require("../models/UserModel")
const jwt=require("jsonwebtoken")
const authorize=require("../middleware/Authorize")
router.post("/updatepassword",authorize,async (req,res)=>{
const querydata=req.body
const userobj=await User.findOne({email:querydata.email})
console.log(userobj.password)
if(userobj){
    const authen= await bcrypt.compare(querydata.password,userobj.password)
    if(authen){
        querydata.newpassword=await bcrypt.hash(querydata.newpassword,6)
       const updateres=await User.findByIdAndUpdate(userobj._id,{password:querydata.newpassword})
        if(updateres)
        {
            res.send({status:true,msg:"updated succesfull"})
        }
        else{
            res.send({status:false,msg:"Please try again"})
        }
    }
    else{
        res.send({status:false,msg:"old password is not matching"})
    }
}

    
})
router.post("/updatecountry",authorize,async (req,res)=>{
  const querydata=req.body
   /*  const reqtoken=req.headers["authorization"]
    const token=reqtoken.replace("Bearer ","")
    try{
       const decodedtoken= jwt.verify(token,"jamesbond")
    }
    catch(err){
        res.send({status:false,msg:"bad authorization"})
    }*/
    const userobj=await User.findOne({email:querydata.email})
    if(userobj){
       const updatecty= await User.findByIdAndUpdate(userobj._id,{country:querydata.country})
       const newadd=userobj.area+" "+querydata.country+" "+userobj.pincode
       const updateadd=await User.findByIdAndUpdate(userobj._id,{address:newadd})
       if(updatecty&&updateadd){
           res.send({status:true,msg:"country updated successfully"})
       }
       else{
        res.send({status:false,msg:"country not updated "})
       }
    }
})
module.exports=router