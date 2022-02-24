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
        maxlength:[10,"maximum length should be 10 characters"]
    },
    area:String,
    pincode:Number,
    country:{
        type:String,
        default:"IND"
    },
    interests:String

})
const User=mongoose.model("EmployeeModel",userSchema)
//record
module.exports=User;
