// controllers/favoriteController.js
const Favorite = require('../models/FavoriteModel');

// Retorna todos os favoritos do banco de dados associados a um usuário
exports.getFavorites = async (req, res) => {
    const userId = req.user.id; // Obtém o ID do usuário autenticado (você precisa implementar a lógica de autenticação)
    try {
        const favorites = await Favorite.find({ user: userId });
        res.json(favorites);
    } catch (error) {
        console.error('Erro ao obter favoritos:', error);
        res.status(500).send('Erro interno do servidor');
    }
};

// Adiciona um novo favorito ao banco de dados associado a um usuário
exports.addToFavorites = async (req, res) => {
    const { title, price, thumbnail } = req.body;
    const userId = req.user.id; // Obtém o ID do usuário autenticado (você precisa implementar a lógica de autenticação)

    try {
        const newFavorite = new Favorite({ title, price, thumbnail, user: userId });
        await newFavorite.save();
        res.json(newFavorite);
    } catch (error) {
        console.error('Erro ao adicionar favorito:', error);
        res.status(500).send('Erro interno do servidor');
    }
};

// Remove um favorito do banco de dados associado a um usuário
exports.removeFromFavorites = async (req, res) => {
    const { title } = req.params;
    const userId = req.user.id; // Obtém o ID do usuário autenticado (você precisa implementar a lógica de autenticação)

    try {
        const removedFavorite = await Favorite.findOneAndRemove({ title, user: userId });
        res.json(removedFavorite);
    } catch (error) {
        console.error('Erro ao remover favorito:', error);
        res.status(500).send('Erro interno do servidor');
    }
};
