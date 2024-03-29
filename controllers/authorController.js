const authorModel = require('../models/authorModel')

exports.getauthor = async (req, res) =>{
    try {
        const author = await authorModel.find()
        res.json(author)
    } catch (error) {
        res.json(error.message)
    }
}

exports.postAuthor = async (req, res) =>{
    try {
        const author = new authorModel(req.body)
        author.validateSync()
        await author.save()
        res.json("l'auteur a bien ete sauvegardé")
    } catch (error) {
        res.json(error.message)
    }
}

exports.deleteAuthor = async (req, res) => {
    try {
        const authorDeleted = await authorModel.deleteOne({ _id: req.params.id })
        res.json(authorDeleted)
    } catch (error) {
        res.send(error.message)
    }
}
exports.getOneAuthor = async (req, res) => {
    try {
        const authorGetOne = await authorModel.findOne({ _id: req.params.id }).populate("recettes")
        res.json(authorGetOne)
    }catch (error) {
        res.send(error.message)
    }
}
