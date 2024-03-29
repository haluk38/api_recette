const recette = require('../models/recette')
const authorModel = require('../models/authorModel')

// cree une recette
exports.postRecette = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor })
        if (author) {
            const newRecette = new recette(req.body)
            newRecette.validateSync()
            await newRecette.save()
           let test = await authorModel.updateOne({ _id: req.params.idAuthor }, { $push: { recettes: newRecette._id } })
           console.log(test);
            res.json("votre recette à bien ete creer")
        } else {
            res.json("aucun auteur n'a ete trouver")
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}
// afficher la recette
exports.getRecette = async (req, res) => {
    try {
        const recettes = await recette.find()
        res.json(recettes)
    } catch (error) {
        res.json(error)
    }
}
// afficher l'id (recuperer)
exports.getOneRecette = async (req, res) => {
    try {
        const recetteFinded = await recette.findOne({ _id: req.params.id })
        res.json(recetteFinded)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}
// supprimer la recette par rapport a l'id
exports.deleteRecette = async (req, res) => {
    try {
        const recetteDeleted = await recette.deleteOne({ _id: req.params.id })
        await authorModel.updateOne({ _id: req.params.idAuthor }, { $pull: { recettes: req.params.idRecette } })
        res.json(recetteDeleted)
    } catch (error) {
        res.send(error.message)
    }
}
// modifier la recette par rapport a l'id
exports.putRecette = async (req, res) => {
    try {
        const recetteUpdate = await recette.updateOne({ _id: req.params.id }, req.body)
        res.json(recetteUpdate)
    } catch (error) {
        res.send(error.message)
    }
}