const express=require('express')
const router=express.Router()
const { initializeDatabase } = require('./config/mongoose');
const app=express()

const routes = require('./routes')
app.use(express.urlencoded({ extended: false }))
require('./Config/Handlebars')(app)
app.use(routes)
app.use('/static', express.static('public'))

initializeDatabase().
then(()=>
{app.listen(5001,()=>console.log('db connected,server is listenig on port5001'))
})


