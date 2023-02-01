
const express=require('express')
const cubeService=require('../Services/Cubeservice')
const router=express.Router()



router.get('/',async (req,res)=>{
const cubes = await cubeService.getAll().lean()
    
//console.log(cubes) 
res.render('index',{cubes})
})

router.get('/about',(req,res)=>{
    res.render('about')
})

module.exports=router