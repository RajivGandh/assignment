const bcrypt = require('bcryptjs')
const User = require('../model/user')
exports.signup= async(req,res)=>{

    try {
        const {phone, password}= req.body
        console.log(phone.toString().length)
        if(phone.toString().length==10){
            let isUser = await User.findOne({phone:phone})
            if(isUser){
                res.status(200).json({message:"User already Existes"})
            }
            else{
                let salt= await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(password,salt);
            
                const user = new User({
                    phone:phone,
                    password:hash
                })
            
                await user.save()
        
                res.status(200).json({message:"User successfully Created"})
            }
        }
        else{
            res.status(200).json({message:"Please enter valid values"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal Server error"})
    }
    
}

exports.login = async(req,res)=>{
    try {
        let {phone, password}=req.body
    let user = await User.findOne({phone:phone})
    if(user){
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token = user.generateAuthToken()
                res.status(200).json({token:token,user_id:user._id})
            }
            else{
                res.status(200).json({message:"Invalid password"})
            }
        })
    }
    else{
        res.status(200).json({message:"User doesnot exist"})
    }
    } catch (error) {
        res.status(500).json({message:"Internal Server error"})
    }
    
}

exports.dashboard= async(req,res)=>{
    try {
        res.send("You have access")
    } catch (error) {
        res.send("Api error")
    }
    
}