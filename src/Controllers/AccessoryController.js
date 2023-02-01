const express=require('express')
const Accessory = require('../Models/Accessory');
const router=express.Router()
const accessoryService=require('../Services/accessoryService')



router.get('/create',(req,res)=>
res.render('createAccessory'))

router.post('/create',async (req,res)=>{
let accessory=req.body
await Accessory.create(accessory)
res.redirect('/')
})


router.get("/attach",async(req,res)=>{
    const accessories = await accessoryService.getAll().lean()
console.log(accessories)
res.render("attachAccessory",{accessories})})

module.exports=router