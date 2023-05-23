const express=require('express')
const app= express()
require('./db/db_con')
const router= require('./routes/user')
app.use(express.json())

app.use('/',router)

app.listen(3000,()=>{
    console.log("Server is listening at 3000")
})