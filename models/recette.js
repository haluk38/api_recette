const mongoose = require('mongoose')

const recetteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, "Le titre de la recette est requis"]
    },
    ingredients: {
        type: Array,
        required: [true, "Ingredients pour recette est requis"]
    },
    instruction: {
        type: String,
        required: [true, "Des instruction sont requis"]
    },
    tempspreparation: {
        type: String,
        required: [true, "Le temps de préparation est requis"]
    },
    tempscuisson: {
        type: String,
        required: [true, "Le temps de cuisson est requis"]
    },
    difficulte: {
        type: String,
        required: [true, "Une difficulté est requis"]
    },
    categorie: {
        type: String,
        required: [true, "Une categorie est requis"]
    },
    
})

const recette = mongoose.model('recettes', recetteSchema)
module.exports = recette