const mongoose = require('mongoose')

const permissionSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    permission:{
        type:Array
    }
},{timestamps:true})

module.exports = mongoose.model('Permission',permissionSchema)
