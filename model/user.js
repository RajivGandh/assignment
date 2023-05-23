const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({
        data:{
            _id:this.id,
            phone:this.phone,
            role:this.role
        }
    },"JWT_SECRET_KEY");
    return token
}

module.exports = mongoose.model('User',userSchema)