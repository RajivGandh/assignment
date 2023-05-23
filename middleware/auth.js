const jwt = require('jsonwebtoken')

const auth= async(req,res,next)=>{
   try {
    const token = req.header('authorization')
    if(!token){
        res.status(200).json({message:"Invalid token"})
    }
    else{
        jwt.verify(token,"JWT_SECRET_KEY",function(err,decoded){
            if(err){
                res.status(200).json({message:"Invalid token"})
            }
            else{
               // console.log(decoded)
                next()
            }
        })
    }
   } catch (error) {
    res.send("Something went wrong")
   }
}
module.exports= auth