const recetteroute = require("express").Router()
const recetteController = require('../controllers/recetteController')

// cree une recette
recetteroute.post('/author/:idAuthor/recettes/', recetteController.postRecette)
// afficher la recette
recetteroute.get('/recettes', recetteController.getRecette)
// afficher l'id (recuperer)
recetteroute.get('/recettes/:id', recetteController.getOneRecette)
// supprimer la recette par rapport a l'id
recetteroute.delete('/author/:idAuthor/recettes/:idRecette', recetteController.deleteRecette)
// modifier la recette par rapport a l'id
recetteroute.put('/recettes/:id', recetteController.putRecette)


module.exports = recetteroute