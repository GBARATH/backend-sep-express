const jwt=require("jsonwebtoken")
const authorize=(req,res,next)=>{
    try{
    const reqtoken=req.headers["authorization"]
    const token=reqtoken.replace("Bearer ","")
    const decodedtoken= jwt.verify(token,"jamesbond")
    console.log("decoded token",decodedtoken)
    next()
    }
    catch(err){
        console.log(err)
        res.send({status:false,msg:"bad authorization"})
    }
}
module.exports=authorize