const { application, urlencoded } = require('express')
const express=require('express')

const HomeController=require('./Controllers/HomeController')
const Cubecontroller=require('./Controllers/Cubecontroller')
const AccessoryController=require('./Controllers/AccessoryController')
const router=express.Router()


router.use('/', HomeController)
router.use('/cube', Cubecontroller)
router.use('/cube/details/:_id', Cubecontroller)

router.use('/accessory', AccessoryController)


module.exports=router 