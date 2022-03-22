const express=require("express")
const router=express.Router()
const bcrypt = require("bcrypt")
const User=require("../models/UserModel")
const authorize=require("../middleware/Authorize")
router.get("/getbyarea/",authorize,async (req,res)=>{
const querydata=req.query
const areadata=await User.find({area:querydata.area})
console.log(areadata)
if(areadata.length>0){
    res.send(areadata)
}
else{
    res.send({status:false,msg:"no results found"})
}
})
module.exports=router