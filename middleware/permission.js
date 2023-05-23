const mongoose = require('mongoose')
const Permission = require("../model/permission")

const isPermission = async (req, res, next) => {
    try {
        let {user_id} = req.body
        let {path} = req.params
        path = Number(path)
        let permission = await Permission.findOne({
            user_id: new mongoose.Types.ObjectId(user_id),
            permission: {
                $in: [path]
            }
        })
       // console.log("permission---", permission)
        if (permission) {
            next()
        } else {
            return res.send("Permission denied")

        }
    } catch (error) {
        return res.send("Something went wrong")
    }

}
module.exports = isPermission
