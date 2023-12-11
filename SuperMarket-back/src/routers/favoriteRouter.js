// routes/favoriteRouter.js
const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const favoriteRouter = express.Router();

// Rota para obter todos os favoritos do usuário
favoriteRouter.route("/favorites")
    .get((req, res) => favoriteController.getFavorites(req, res));

// Rota para adicionar um favorito associado ao usuário
favoriteRouter.route("/favorites")
    .post((req, res) => favoriteController.addToFavorites(req, res));

// Rota para remover um favorito associado ao usuário
favoriteRouter.route("/favorites/:title")
    .delete((req, res) => favoriteController.removeFromFavorites(req, res));

module.exports = favoriteRouter;
