const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/kiplAssignment',{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to DB")
})
.catch(err=>{
    console.log("Error to connect to DB",err)
})