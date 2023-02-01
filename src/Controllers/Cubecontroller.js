const express=require('express')
const fs=require('fs/promises');
const Cube = require('../Models/Cube');
const router=express.Router()
const cubeService = require('../Services/Cubeservice')


router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let cube=req.body
    
    Cube.create(cube)

res.redirect('/')
});

router.get('/details/:_id',async (req, res) => {
   // console.log(req.params._id)
    const cube=await cubeService.findOne(req.params._id).lean()
   // console.log(`this is the ${cube}`)
    res.render('details', { cube });
});





module.exports=router