const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    auteur: {
        type: String,
        required: [true, "l'auteur est requis"]
    },
    recettes: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "recettes"
            }
        ]
    }
})

const authorModel = mongoose.model('author', authorSchema)
module.exports = authorModel