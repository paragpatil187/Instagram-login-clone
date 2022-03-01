const express = require("express");
const User =require("./user.model");
const router=express.Router()
router.post("/",async(req,res)=>{
    try{
       const user = await User.create(req.body);
        res.status(200).send(user)

    }
    catch(e){
        return res.status(500).json({ status: "failed", message: e.message});
    }
})
router.get("",async(req,res)=>{
    try{
        const user =await User.find().lean().exec()
        res.status(201).send(user)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})

module.exports=router