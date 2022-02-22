const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shruthi:cram123@cluster0.rpq7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then((res)=>console.log("connected to db")).catch((err)=>console.log("error in connection"))
//model
const User=mongoose.model("EmployeeModel",{
    username:String,
    yoe:Number
})
//record
const peter=new User({
    username:"peter",
    yoe:9
})
peter.save().then(()=>console.log("added"))
