const mongoose=require('mongoose')
const cubeSchema=new mongoose.Schema({

    name:{
       
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true,
        maxlength:120
    },
    difficultyLevel:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }

    

})
const Cube=mongoose.model('Cube',cubeSchema)

module.exports=Cube