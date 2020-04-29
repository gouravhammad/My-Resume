const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

// Inbuild Middleware
app.use(express.static(path.join(__dirname,'public')))

// View Engine Setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('Resume')
})

app.get('/gallery',function(req,res){
    res.render('Gallery')
})

app.get('/blog',function(req,res){
    res.render('Blog')
})

// Server
app.listen(PORT,function(error){
    if(error) throw error
    console.log("Server created Successfully on Port",PORT)
})