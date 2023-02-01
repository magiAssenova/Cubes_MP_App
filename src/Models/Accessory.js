const mongoose=require('mongoose')

const AccessorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        maxlenght:120
    },
    imageUrl:{
        type:String,
        required:true,
        validate:
        {validator:function (){return this.imageUrl.startsWith('http')},
        message:'Url should start with http!'}
    }
})

const Accessory=mongoose.model('Accessory', AccessorySchema)


module.exports=Accessory