const authorRouter = require("express").Router()
const authorController = require('../controllers/authorController')

authorRouter.get('/author', authorController.getauthor)
authorRouter.post('/author', authorController.postAuthor)
authorRouter.delete('/author/:id',authorController.deleteAuthor)
authorRouter.get('/author/:id', authorController.getOneAuthor)

module.exports = authorRouter