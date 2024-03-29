const express = require('express')
const mongoose = require('mongoose')
const recetterouter = require('./router/recetteroute')
const authorRouter = require('./router/authorRouter')
const app = express()

app.use(express.json()) //permet de pouvoir recupere les donner client 
app.use(recetterouter) // permet a express d'utiliser le fichier de routes
app.use(authorRouter)

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connecté au server");
    }
})

mongoose.connect("mongodb://localhost:27017/recette")






