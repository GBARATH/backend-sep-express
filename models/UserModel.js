const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shruthi:cram123@cluster0.rpq7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((res)=>console.log("connected to db")).catch((err)=>console.log("error in connection"))
//model
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username"]
    },
    email:{
        type:String,
        required:[true,"enter email"],
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:[true,"enter username"],
        minlength:[5,"minimum length should be 5 characters"],
    },
    area:String,
    pincode:Number,
    country:{
        type:String,
        default:"IND"
    },
    address:String,
    interests:String

})
//custom method
userSchema.methods.saveCustom=async function(){
    try{
        const user=this
        console.log(user.address)
        if(user.address){
            return this.save()
        }
        else{
            user.address=user.area+" "+user.country+" "+user.pincode
            return this.save()
        }
    }
    catch(err){
        console.log(err)
    }
}
userSchema.statics.signin=async function(ipemail,password){
    const res=await User.findOne({email:ipemail})
    console.log(res)
    console.log(res.password)
    return res.pass
}
const User=mongoose.model("EmployeeModel",userSchema)



module.exports=User;
