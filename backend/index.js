const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./Models/Users');
require('dotenv').config({path:'/home/keerthana/Desktop/Tasks/Bookreviewblog/.env'});

const password = process.env.MONGODB_PASSWORD
const port = process.env.SERVER_PORT || 3006
mongoose.connect(`mongodb+srv://keerthanas1910:${password}@cluster0.kjij7sz.mongodb.net/`)
const app = express();
app.use(cors());
app.use(express.json());

app.post('/register',async(req,res)=>{
   let {username,email,password} = req.body
   const existinguser = await userModel.findOne({email})
   if(existinguser){
    res.status(409).json({message:'user exists'})
   }
   const newuser = new userModel({
    username,
    password,
    email
   })
   newuser.save()
   res.status(200).json({message:'regitered successfully'})
})

app.post('/login',async(req,res)=>{
    let {email,password} = req.body
    const existinguser = await userModel.findOne({email})
    console.log(existinguser)
    if(existinguser){
        if(existinguser.password === req.body.password){
            res.status(200).json({message:'login successful'})
        }else{
            res.status(401).json({message:'invalid credentials'})
        }
    }else{
        res.send(404).json({message:'user not found'})
    }
})

app.listen(port,()=>{
    console.log(`app listening in port ${port}`)
})